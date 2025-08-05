#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');

async function updateArticles() {
  console.log('🔍 查找所有文章文件...');
  
  const articlesDir = path.join(__dirname, '../src/app/articles');
  const articleFiles = await glob('*/page.mdx', {
    cwd: articlesDir,
    absolute: true,
  });

  console.log(`📚 找到 ${articleFiles.length} 篇文章`);

  for (const filePath of articleFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const dirName = path.basename(path.dirname(filePath));
    
    // 检查是否已经有 ArticleWrapper
    if (content.includes('ArticleWrapper')) {
      console.log(`✅ ${dirName} 已经更新`);
      continue;
    }

    // 检查是否有 article export
    if (!content.includes('export const article')) {
      console.log(`⚠️  ${dirName} 缺少 article 导出，跳过`);
      continue;
    }

    // 更新内容
    let updatedContent = content;
    
    // 添加 ArticleWrapper import
    if (!content.includes("import { ArticleWrapper }")) {
      updatedContent = updatedContent.replace(
        "import { ArticleLayout }",
        "import { ArticleLayout } from '@/components/ArticleLayout'\nimport { ArticleWrapper }"
      );
    }

    // 添加 slug 到 article 对象
    const articleMatch = content.match(/export const article = {([^}]+)}/s);
    if (articleMatch && !articleMatch[1].includes('slug:')) {
      updatedContent = updatedContent.replace(
        /export const article = {([^}]+)}/s,
        (match, p1) => {
          const lines = p1.trim().split('\n');
          lines.push(`  slug: '${dirName}',`);
          return `export const article = {\n  ${lines.join('\n  ')}\n}`;
        }
      );
    }

    // 更新默认导出以使用 ArticleWrapper
    updatedContent = updatedContent.replace(
      /export default \(props\) => <ArticleLayout article={article} {...props} \/>/,
      `export default (props) => (
  <ArticleWrapper article={article}>
    <ArticleLayout article={article} {...props} />
  </ArticleWrapper>
)`
    );

    // 修复作者名称
    updatedContent = updatedContent.replace(
      /author: ['"](?:Adam Wathan|Spencer Sharp)['"]/,
      "author: '水木易'"
    );

    // 写回文件
    fs.writeFileSync(filePath, updatedContent);
    console.log(`✨ 更新了 ${dirName}`);
  }

  console.log('\n🎉 所有文章更新完成！');
  console.log('\n📝 下一步：');
  console.log('1. 在 public/ 目录下添加 og-image.jpg (1200x630px)');
  console.log('2. 在 public/ 目录下添加 avatar.jpg (400x400px)');
  console.log('3. 为每篇文章创建专属的 og-image.jpg');
  console.log('4. 运行 npm run build 测试构建');
}

updateArticles().catch(console.error);