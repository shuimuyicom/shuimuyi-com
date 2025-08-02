#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 命令行颜色
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function printHeader() {
  console.clear();
  console.log(`${colors.cyan}${colors.bright}
╔═══════════════════════════════════════════╗
║         📝 博客助手 - 初学者版本          ║
╚═══════════════════════════════════════════╝
${colors.reset}`);
}

function printMenu() {
  console.log(`
${colors.yellow}请选择你想做什么：${colors.reset}

${colors.green}1.${colors.reset} 📝 写新文章
${colors.green}2.${colors.reset} 📚 查看所有文章
${colors.green}3.${colors.reset} ✏️  编辑现有文章
${colors.green}4.${colors.reset} 🗑️  删除文章
${colors.green}5.${colors.reset} 📖 查看写作指南
${colors.green}6.${colors.reset} 🚪 退出

`);
}

function generateSlug(title) {
  // 生成简洁的URL
  
  // 尝试从标题中提取英文
  const englishWords = title.match(/[a-zA-Z]+/g);
  if (englishWords && englishWords.length > 0) {
    const baseSlug = englishWords.join('-').toLowerCase();
    
    // 检查是否已存在，如果存在则添加数字
    const existingArticles = getArticleList();
    let slug = baseSlug;
    let counter = 1;
    
    while (existingArticles.some(a => a.slug === slug)) {
      counter++;
      slug = `${baseSlug}-${counter}`;
    }
    
    return slug;
  }
  
  // 如果没有英文，使用 "article" + 数字
  const existingArticles = getArticleList();
  const articleNumbers = existingArticles
    .map(a => {
      const match = a.slug.match(/^article-(\d+)$/);
      return match ? parseInt(match[1]) : 0;
    })
    .filter(n => n > 0);
  
  const nextNumber = articleNumbers.length > 0 ? Math.max(...articleNumbers) + 1 : 1;
  return `article-${nextNumber}`;
}

function getArticleList() {
  const articlesDir = path.join(process.cwd(), 'src', 'app', 'articles');
  if (!fs.existsSync(articlesDir)) {
    return [];
  }

  const articles = [];
  const dirs = fs.readdirSync(articlesDir, { withFileTypes: true });

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      const articlePath = path.join(articlesDir, dir.name, 'page.mdx');
      if (fs.existsSync(articlePath)) {
        try {
          const content = fs.readFileSync(articlePath, 'utf8');
          const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
          const dateMatch = content.match(/date:\s*['"`]([^'"`]+)['"`]/);
          
          articles.push({
            slug: dir.name,
            title: titleMatch ? titleMatch[1] : dir.name,
            date: dateMatch ? dateMatch[1] : '未知日期',
            path: articlePath
          });
        } catch (error) {
          // 忽略读取错误
        }
      }
    }
  }

  return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function createArticleTemplate(title, description, slug) {
  const date = new Date().toISOString().split('T')[0];
  
  return `import { ArticleLayout } from '@/components/ArticleLayout'
import { ArticleWrapper } from '@/components/ArticleWrapper'

export const article = {
  author: '水木易',
  date: '${date}',
  title: '${title}',
  description: '${description}',
  slug: '${slug}',
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default (props) => (
  <ArticleWrapper article={article}>
    <ArticleLayout article={article} {...props} />
  </ArticleWrapper>
)

在这里开始写你的文章内容...

## 第一个章节

你可以从这里开始组织你的内容。

### 小提示

1. 使用 **粗体** 来强调重要内容
2. 使用 *斜体* 来表示引用或特殊说明
3. 使用列表来组织内容：
   - 第一点
   - 第二点
   - 第三点

### 添加代码

如果你想分享代码，可以这样：

\`\`\`javascript
// 你的代码
console.log('Hello, World!');
\`\`\`

### 添加图片

1. 将图片放在文章目录中
2. 在文件顶部导入：\`import myImage from './image.png'\`
3. 在文章中使用：\`<Image src={myImage} alt="描述" />\`

## 结语

感谢阅读！

---

*这篇文章创建于 ${date}*
`;
}

async function createNewArticle() {
  printHeader();
  console.log(`${colors.green}${colors.bright}📝 创建新文章${colors.reset}\n`);
  
  console.log(`${colors.cyan}让我们一步步创建你的新文章：${colors.reset}\n`);
  
  // 1. 标题
  console.log(`${colors.yellow}步骤 1/2: 文章标题${colors.reset}`);
  console.log('给你的文章起个标题（比如："我的第一篇博客"、"今天学到的新知识"）');
  const title = await askQuestion(`${colors.green}标题: ${colors.reset}`);
  
  if (!title.trim()) {
    console.log(`${colors.red}标题不能为空！${colors.reset}`);
    await askQuestion('\n按回车键返回主菜单...');
    return;
  }
  
  // 2. 简介
  console.log(`\n${colors.yellow}步骤 2/2: 文章简介${colors.reset}`);
  console.log('用一句话描述这篇文章的内容');
  const description = await askQuestion(`${colors.green}简介: ${colors.reset}`) || '这是一篇精彩的文章';
  
  // 生成文件名
  const slug = generateSlug(title);
  
  // 预览
  console.log(`\n${colors.cyan}文章预览：${colors.reset}`);
  console.log(`📌 标题: ${title}`);
  console.log(`📝 简介: ${description}`);
  console.log(`🔗 访问地址: /articles/${slug}`);
  
  const confirm = await askQuestion(`\n${colors.yellow}确认创建这篇文章吗？(Y/n): ${colors.reset}`);
  if (confirm.toLowerCase() === 'n') {
    console.log(`${colors.yellow}已取消创建${colors.reset}`);
    await askQuestion('\n按回车键返回主菜单...');
    return;
  }
  
  // 创建文章
  try {
    const articleDir = path.join(process.cwd(), 'src', 'app', 'articles', slug);
    fs.mkdirSync(articleDir, { recursive: true });
    
    const content = createArticleTemplate(title, description, slug);
    const articlePath = path.join(articleDir, 'page.mdx');
    fs.writeFileSync(articlePath, content);
    
    console.log(`\n${colors.green}✅ 文章创建成功！${colors.reset}`);
    console.log(`\n📁 文件位置: ${articlePath}`);
    console.log(`🌐 预览地址: http://localhost:3000/articles/${slug}`);
    console.log(`\n${colors.cyan}提示: 现在你可以打开文件开始写作了！${colors.reset}`);
    
  } catch (error) {
    console.log(`${colors.red}❌ 创建失败: ${error.message}${colors.reset}`);
  }
  
  await askQuestion('\n按回车键返回主菜单...');
}

async function viewArticles() {
  printHeader();
  console.log(`${colors.green}${colors.bright}📚 所有文章${colors.reset}\n`);
  
  const articles = getArticleList();
  
  if (articles.length === 0) {
    console.log(`${colors.yellow}还没有任何文章，快去创建第一篇吧！${colors.reset}`);
  } else {
    console.log(`共有 ${colors.cyan}${articles.length}${colors.reset} 篇文章：\n`);
    
    articles.forEach((article, index) => {
      console.log(`${colors.green}${index + 1}.${colors.reset} ${article.title}`);
      console.log(`   📅 ${article.date}`);
      console.log(`   🔗 /articles/${article.slug}`);
      console.log('');
    });
  }
  
  await askQuestion('按回车键返回主菜单...');
}

async function editArticle() {
  printHeader();
  console.log(`${colors.green}${colors.bright}✏️ 编辑文章${colors.reset}\n`);
  
  const articles = getArticleList();
  if (articles.length === 0) {
    console.log(`${colors.yellow}还没有文章可以编辑${colors.reset}`);
    await askQuestion('\n按回车键返回主菜单...');
    return;
  }
  
  articles.forEach((article, index) => {
    console.log(`${colors.green}${index + 1}.${colors.reset} ${article.title} (${article.date})`);
  });
  
  const choice = await askQuestion(`\n请输入要编辑的文章编号: `);
  const index = parseInt(choice) - 1;
  
  if (index >= 0 && index < articles.length) {
    const article = articles[index];
    console.log(`\n${colors.cyan}文件路径: ${article.path}${colors.reset}`);
    console.log(`${colors.yellow}提示: 请在你的编辑器中打开上述文件进行编辑${colors.reset}`);
    
    // 尝试用 VS Code 打开
    const { exec } = require('child_process');
    exec(`code "${article.path}"`, (error) => {
      if (!error) {
        console.log(`${colors.green}已尝试在 VS Code 中打开文件${colors.reset}`);
      }
    });
  } else {
    console.log(`${colors.red}无效的选择${colors.reset}`);
  }
  
  await askQuestion('\n按回车键返回主菜单...');
}

async function deleteArticle() {
  printHeader();
  console.log(`${colors.red}${colors.bright}🗑️ 删除文章${colors.reset}\n`);
  
  const articles = getArticleList();
  if (articles.length === 0) {
    console.log(`${colors.yellow}没有文章可以删除${colors.reset}`);
    await askQuestion('\n按回车键返回主菜单...');
    return;
  }
  
  articles.forEach((article, index) => {
    console.log(`${colors.green}${index + 1}.${colors.reset} ${article.title} (${article.date})`);
  });
  
  const choice = await askQuestion(`\n请输入要删除的文章编号: `);
  const index = parseInt(choice) - 1;
  
  if (index >= 0 && index < articles.length) {
    const article = articles[index];
    console.log(`\n${colors.red}警告: 即将删除 "${article.title}"${colors.reset}`);
    const confirm = await askQuestion('确认删除？(y/N): ');
    
    if (confirm.toLowerCase() === 'y') {
      try {
        const articleDir = path.join(process.cwd(), 'src', 'app', 'articles', article.slug);
        fs.rmSync(articleDir, { recursive: true, force: true });
        console.log(`${colors.green}✅ 删除成功${colors.reset}`);
      } catch (error) {
        console.log(`${colors.red}❌ 删除失败: ${error.message}${colors.reset}`);
      }
    } else {
      console.log(`${colors.yellow}已取消删除${colors.reset}`);
    }
  } else {
    console.log(`${colors.red}无效的选择${colors.reset}`);
  }
  
  await askQuestion('\n按回车键返回主菜单...');
}

function showWritingGuide() {
  printHeader();
  console.log(`${colors.green}${colors.bright}📖 写作指南${colors.reset}\n`);
  
  console.log(`${colors.cyan}1. Markdown 基础语法${colors.reset}
  
# 一级标题
## 二级标题
### 三级标题

**粗体文本**
*斜体文本*
***粗斜体***

- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2

> 引用文本

[链接文字](https://example.com)

---  (分割线)

${colors.cyan}2. 代码块${colors.reset}

\`\`\`javascript
function hello() {
  console.log('Hello!');
}
\`\`\`

${colors.cyan}3. 写作建议${colors.reset}

✅ 使用清晰的标题结构
✅ 段落之间留空行
✅ 适当使用列表和引用
✅ 代码要有语法高亮
✅ 图片要有描述文字

${colors.cyan}4. 常见问题${colors.reset}

Q: 如何添加图片？
A: 1. 将图片放在文章目录
   2. 在文件顶部: import img from './图片.png'
   3. 在文章中: <Image src={img} alt="描述" />

Q: 如何预览文章？
A: 运行 npm run dev，然后访问 http://localhost:3000/articles/你的文章

Q: 支持哪些文件格式？
A: 主要是 .mdx 文件，可以包含 Markdown 和 React 组件
`);
  
  return askQuestion('\n按回车键返回主菜单...');
}

async function main() {
  while (true) {
    printHeader();
    printMenu();
    
    const choice = await askQuestion(`${colors.yellow}请输入选项 (1-6): ${colors.reset}`);
    
    switch (choice.trim()) {
      case '1':
        await createNewArticle();
        break;
      case '2':
        await viewArticles();
        break;
      case '3':
        await editArticle();
        break;
      case '4':
        await deleteArticle();
        break;
      case '5':
        await showWritingGuide();
        break;
      case '6':
        console.log(`\n${colors.cyan}再见！祝你写作愉快！ 👋${colors.reset}\n`);
        rl.close();
        return;
      default:
        console.log(`${colors.red}无效的选择，请重试${colors.reset}`);
        await askQuestion('\n按回车键继续...');
    }
  }
}

// 启动程序
main().catch(error => {
  console.error(`${colors.red}程序错误: ${error.message}${colors.reset}`);
  rl.close();
});