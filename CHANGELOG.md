# 📋 更新日志

## 🎯 2025-08-02

### 🎨 界面优化

#### 导航栏调整
- 隐藏了"演讲"和"工具箱"导航标签
- 在 `src/app/speaking/page.tsx` 和 `src/app/uses/page.tsx` 页面顶部添加了注释说明
- 页面文件保留在项目中，便于将来重新启用
- 同步隐藏底部导航（Footer.tsx）中的"演讲"和"工具箱"链接

#### 最佳实践优化
- **移除中间件方案**：删除了 `middleware.ts` 文件，避免不必要的性能开销
- **采用页面级控制**：在 `src/app/speaking/page.tsx` 和 `src/app/uses/page.tsx` 中使用 `notFound()` 函数
- **简化实现**：从中间件方案改为页面组件内控制，代码更简洁，维护更容易
- **性能提升**：避免了每个请求都经过中间件处理，提高了整体性能

#### 高亮色方案更新
从 **teal 色系** 更换为 **violet 色系**：

| 颜色变更 | 原色值 | 新色值 | 使用场景 |
|---------|--------|--------|----------|
| 深色模式 | `teal-400` | `violet-500` | 深色模式高亮 |
| 浅色模式主色 | `teal-500` | `violet-600` | 浅色模式默认高亮 |
| 浅色模式悬停 | `teal-600` | `violet-700` | 浅色模式悬停效果 |

**更新文件列表：**
- `typography.ts` - 核心颜色配置
- `src/components/Header.tsx` - 导航栏激活和悬停状态
- `src/styles/prism.css` - 代码高亮配色
- `src/components/Footer.tsx` - 页脚链接悬停色
- `src/components/Card.tsx` - 卡片 CTA 颜色
- `src/app/page.tsx` - 首页邮件输入框焦点色
- `src/app/about/page.tsx` - 关于页面社交链接悬停色
- `src/app/projects/page.tsx` - 项目页面链接悬停色

### 🔍 全面 SEO 优化

#### 搜索引擎基础配置
- ✅ 创建 `public/robots.txt` - 配置搜索引擎爬虫规则
- ✅ 实现 `src/app/sitemap.ts` - 动态生成 XML 站点地图
- ✅ 修复语言设置 - 将 HTML lang 属性从 "en" 改为 "zh-CN"

#### 社交媒体优化
- ✅ 添加 Open Graph 元标签 - 优化社交媒体分享
- ✅ 添加 Twitter Card 元标签 - 支持 Twitter 卡片预览
- ✅ 创建 `src/lib/seo.ts` - 集中管理 SEO 配置

#### 结构化数据实现
- ✅ 创建 `src/components/StructuredData.tsx` - 实现多种结构化数据
- ✅ 支持以下数据类型：
  - 🏠 WebSite
  - 👤 Person
  - 📝 BlogPosting
  - 🍞 BreadcrumbList
- ✅ 创建 `src/components/ArticleWrapper.tsx` - 文章 SEO 包装组件

#### 内容优化
- ✅ 更新 RSS feed 作者信息 - 从英文改为中文
- ✅ 添加 Canonical URLs - 避免重复内容问题
- ✅ 更新所有文章页面 - 集成结构化数据

#### 工具和脚本
- 🛠️ 创建 `scripts/update-articles-seo.js` - 批量更新文章 SEO
- 🛠️ 创建 `scripts/fix-article-imports.js` - 修复导入路径
- 🛠️ 更新博客助手 - 新文章自动包含 SEO 功能

#### 文档和指南
- 📚 创建 `public/og-image-guide.md` - Open Graph 图片设置指南
- 📚 创建 `SEO-优化完成报告.md` - 详细的优化报告
- 📚 创建 `网站高亮色使用规范.md` - 高亮色规范文档

### 🐛 问题修复

#### 高亮色失效问题
- 🔧 修复 `typography.ts` 中的 theme() 函数语法
- 🔧 更新 `src/styles/prism.css` 中的 CSS 变量为实际颜色值

---

## 🎯 2025-08-01

### 📝 博客管理系统

#### 全新的博客助手
- ✅ 创建 `scripts/blog-helper.js` - 集成式博客管理工具
- ✅ 功能特性：
  - 📝 创建新文章 - 引导式文章创建流程
  - 📚 查看所有文章 - 列出所有博客文章
  - ✏️ 编辑现有文章 - 快速打开文章进行编辑
  - 🗑️ 删除文章 - 安全删除文章（带确认）
  - 📖 内置写作指南 - 查看 Markdown 语法和技巧
- ✅ 特点：
  - 🎨 彩色终端界面
  - 🌏 完美支持中文
  - 🔧 智能错误处理
  - 📦 自动依赖检查

#### URL 生成优化
- ✅ 移除日期前缀，使用更简洁的 URL
- ✅ 智能 URL 生成规则：
  - 英文标题：`"My First Blog"` → `my-first-blog`
  - 中文标题：`"我的文章"` → `article-1`
  - 自动防重复：`hello-world` 已存在 → `hello-world-2`

#### 文章模板优化
- ✅ 标题和简介不再在正文中重复
- ✅ 更专业的文章结构
- ✅ 自动生成的模板包含常用格式示例

#### 界面调整
- ✅ 调整文章标题字体大小
  - 移动端：`text-4xl` → `text-3xl`
  - 桌面端：`text-5xl` → `text-4xl`
- ✅ 优化菜单提示语，移除多余的"（最简单）"

#### 系统清理
- 🗑️ 删除多余的脚本文件：
  - `scripts/new-article.js`
  - `scripts/simple-new-article.js`
  - `scripts/manage-articles.js`
- 🗑️ 删除 `templates` 文件夹和模板文件
- 🗑️ 删除重复的文档和启动脚本
- 🗑️ 简化 `package.json`，只保留 `blog` 命令

#### 文档更新
- 📚 创建 `如何开始写博客.md` - 极简使用指南
- 📚 添加重要提醒：
  - 文件扩展名必须是 `.mdx`
  - 新增文章无需重启服务
  - 提供两种删除文章的方法

#### 技术细节
- ✅ 文件扩展名验证 - 强制使用 `.mdx`
- ✅ 实时热重载 - Next.js 自动检测文件变化
- ✅ 路径处理优化 - 改进脚本的路径识别

### 🎯 最终成果
创建了一个**极简但功能完整**的博客管理系统：
- 一个核心脚本 (`blog-helper.js`)
- 一个命令 (`npm run blog`)
- 一份指南 (`如何开始写博客.md`)
- 零学习成本，专注于写作本身

---

## 🎯 2025-07-31

### 🚀 个人网站初始化配置

#### 网站基本信息更新
- ✅ 更新 `src/app/layout.tsx` 中的网站元数据
  - 标题：`水木易 - Vibe Coder | 终身学习者 | 中华国学探索者`
  - 描述：更新为个人介绍，强调作为 Vibe Coder 的身份
- ✅ 更新 `src/components/Footer.tsx` 页脚版权信息为"水木易"

#### 个人资料配置
- ✅ 配置头像文件
  - `src/images/avatar.jpg` - 导航栏圆形头像
  - `src/images/portrait.jpg` - About 页面肖像照片
- ✅ **成功隐藏了主页的照片墙**
  - 注释掉 `Photos` 组件的调用
  - 保留组件代码以便将来使用

#### 主页内容个性化
- ✅ 更新主页标题为："Vibe Coder，用代码创造有温度的世界。"
- ✅ 更新个人介绍，突出多元身份：
  - 🧑‍💻 Vibe Coder
  - 📚 终身学习者
  - ☯️ 中华国学探索者
  - 🧩 产品经理
  - 🤔 哲学硕士

#### 社交媒体配置
- ✅ 配置四个主要社交平台链接：
  - X (Twitter): https://x.com/shuimuyicom
  - 小红书: https://www.xiaohongshu.com/user/profile/67c43e27000000000601de46
  - B站: https://space.bilibili.com/3546693144414341
  - 微信公众号: https://mp.weixin.qq.com/s/KiXFC1ajCoU0jy-ThpV7ng
- ✅ 添加新的社交图标组件：
  - `XiaohongshuIcon` - 使用官方提供的 SVG
  - `BilibiliIcon`
  - `WechatIcon`

#### 页面内容更新
- ✅ **About 页面**
  - 更新页面标题和描述为中文
  - 重写个人介绍，深入阐述个人理念
  - 更新社交媒体链接列表
  - 更新联系邮箱为 hi@shuimuyi.com
- ✅ **Uses 页面**
  - 更新为"工具箱"主题
  - 替换所有工具推荐为适合中文用户的选择
  - 添加"学习资源"新板块

#### 导航菜单汉化
- ✅ 将所有导航菜单项翻译为中文：
  - About → 关于我
  - Articles → 文章
  - Projects → 项目
  - Speaking → 演讲
  - Uses → 工具箱
- ✅ 更新页头和页脚的导航链接

#### 代码清理
- ✅ 删除未使用的社交图标组件：
  - `InstagramIcon`
  - `GitHubIcon`
  - `LinkedInIcon`
- ✅ 清理相关引用，保持代码整洁

#### 其他配置
- ✅ 提供网站图标 (favicon) 更新指南
- ✅ 清理 Next.js 构建缓存解决编译问题

### 🎯 最终成果
成功将一个英文模板网站完全个性化为中文个人网站，保留了原有的设计美感，同时注入了个人特色和中国元素。

---

## 🎯 2025-07-16

### 🚀 项目初始化和框架升级

#### 环境配置
- ✅ 确认 Node.js v22.17.1 LTS 版本（通过 nvm 管理）
- ✅ 确认 npm 10.9.2 版本
- ✅ 配置 nvm 自动加载（`.zshrc` 配置）

#### 依赖包全面升级
升级所有框架到最新稳定版本：

**主要框架升级：**
| 框架 | 旧版本 | 新版本 | 说明 |
|------|--------|--------|------|
| Next.js | 14.0.4 | 15.4.1 | React 全栈框架 |
| React | 18.2.0 | 19.1.0 | UI 库最新版 |
| Tailwind CSS | 4.1.7 | 4.1.11 | CSS 框架 v4 |
| TypeScript | 5.3.3 | 5.8.3 | 类型安全 |
| ESLint | 8.56.0 | 9.18.0 | 代码检查工具 |

**其他依赖包升级：**
- `@headlessui/react`: 2.1.0 → 2.2.4
- `@mdx-js/loader`: 3.0.0 → 3.1.0
- `@mdx-js/react`: 3.0.0 → 3.1.0
- `@tailwindcss/typography`: 0.5.4 → 0.5.15
- `@types/node`: 20.10.8 → 22.16.4（匹配 Node.js 22.x）
- `@types/react`: 18.2.47 → 19.1.8
- `@types/react-dom`: 18.2.18 → 19.1.6
- `@types/webpack-env`: 1.18.1 → 1.18.5
- `cheerio`: 1.0.0-rc.12 → 1.1.0
- `clsx`: 2.1.0 → 2.1.1
- `next-themes`: 0.2.1 → 0.4.6
- `prettier-plugin-tailwindcss`: 0.6.11 → 0.6.14
- `sharp`: 0.33.1 → 0.33.5

#### 项目配置优化
- ✅ 清理并重新安装所有依赖（548个包）
- ✅ 验证开发服务器正常运行
- ✅ 确认网站功能正常，页面加载快速

#### Tailwind CSS v4 特性
- ✅ 确认项目使用 Tailwind CSS v4 新特性
- ✅ 不再需要 `tailwind.config.js` 文件
- ✅ 使用 `src/styles/tailwind.css` 直接配置
- ✅ 支持 `@theme` 指令定义设计系统

#### 文档创建和更新
- 📚 创建 `个人网站搭建指南.md` - 详细的搭建指南
  - 环境准备步骤
  - 项目结构详解
  - Tailwind CSS v4 配置说明
  - 常见问题及解决方案
- 📚 更新 `README.md` - 添加技术栈版本信息
  - 详细的技术栈说明（含版本号）
  - 系统要求说明
  - 项目结构图
  - 部署指南
  - 故障排除指南

#### 技术优势
- **Next.js 15**：更快的构建速度、改进的 App Router、更好的性能优化
- **React 19**：新的并发特性、改进的服务器组件、更好的性能
- **Tailwind CSS 4**：最新的 bug 修复、性能改进、新的配置方式

### 🎯 最终成果
成功将项目升级到最新技术栈，为后续的个人网站开发奠定了坚实基础。所有依赖包都使用最新稳定版本，确保了项目的现代性和长期维护性。

---

> 💡 **提示**：所有更改都已经过测试，网站功能正常运行。
