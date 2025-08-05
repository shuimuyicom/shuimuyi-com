#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');

async function fixArticleImports() {
  console.log('🔧 修复文章导入路径...');
  
  const articlesDir = path.join(__dirname, '../src/app/articles');
  const articleFiles = await glob('*/page.mdx', {
    cwd: articlesDir,
    absolute: true,
  });

  console.log(`📚 找到 ${articleFiles.length} 篇文章`);

  let fixedCount = 0;
  
  for (const filePath of articleFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const dirName = path.basename(path.dirname(filePath));
    
    // 检查是否有错误的导入路径
    if (content.includes("import { ArticleWrapper } from '@/components/ArticleLayout'")) {
      // 修复导入路径
      const fixedContent = content.replace(
        "import { ArticleWrapper } from '@/components/ArticleLayout'",
        "import { ArticleWrapper } from '@/components/ArticleWrapper'"
      );
      
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ 修复了 ${dirName}`);
      fixedCount++;
    } else if (!content.includes("import { ArticleWrapper }")) {
      console.log(`⚠️  ${dirName} 可能需要手动检查`);
    } else {
      console.log(`✓ ${dirName} 导入路径正确`);
    }
  }

  console.log(`\n🎉 修复完成！共修复了 ${fixedCount} 个文件`);
}

fixArticleImports().catch(console.error);