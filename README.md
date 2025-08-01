# 水木易个人网站 | Shuimuyi.com

这是水木易的个人网站项目，一个现代化的个人作品集和博客网站，由 [Tailwind Plus](https://tailwindcss.com/plus) 模板定制而成。

## 🌟 网站简介

我是水木易，一名充满热情的 **Vibe Coder**。作为终身学习者，我在产品管理、哲学思考和中华国学之间不断探索。我相信技术与人文的结合能创造更美好的数字世界，致力于用代码构建有温度、有深度的应用。

## 🚀 技术栈

本网站使用最新稳定版本的现代化技术栈构建：

- **[Next.js](https://nextjs.org)** (v15.4.1) - React 全栈框架
- **[React](https://react.dev)** (v19.1.0) - UI 库
- **[Tailwind CSS](https://tailwindcss.com)** (v4.1.11) - 实用优先的 CSS 框架
- **[TypeScript](https://www.typescriptlang.org)** (v5.8.3) - JavaScript 的类型化超集
- **[MDX](https://mdxjs.com)** (v3.1.0) - 在 Markdown 中使用 JSX
- **[Headless UI](https://headlessui.dev)** (v2.2.4) - 无样式的 UI 组件

## 📋 系统要求

- Node.js 22.17.1 或更高版本
- npm 10.9.2 或更高版本

## 🛠️ 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

创建 `.env.local` 文件并设置站点 URL：

```
NEXT_PUBLIC_SITE_URL=https://shuimuyi.com
```

### 3. 启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📜 可用脚本

- `npm run dev` - 在开发模式下运行应用（支持热重载）
- `npm run build` - 构建用于生产的应用
- `npm run start` - 运行构建后的生产版本
- `npm run lint` - 运行 ESLint 进行代码检查
- `npm run blog` - 运行博客助手工具

## 📁 项目结构

```
├── src/
│   ├── app/              # Next.js App Router 页面
│   │   ├── about/        # 关于我
│   │   ├── articles/     # 文章博客
│   │   ├── projects/     # 项目展示
│   │   ├── speaking/     # 演讲分享
│   │   └── uses/         # 工具箱
│   ├── components/       # React 组件
│   ├── images/          # 图片资源
│   ├── lib/             # 工具函数和库
│   └── styles/          # 全局样式和 Tailwind 配置
├── scripts/             # 辅助脚本
│   └── blog-helper.js   # 博客管理工具
├── public/              # 静态资源
├── package.json         # 项目依赖和脚本
├── next.config.mjs      # Next.js 配置
├── tsconfig.json        # TypeScript 配置
└── README.md            # 项目说明文档
```

## ✨ 网站功能

### 核心功能
- 📝 **博客系统** - 使用 MDX 支持的文章管理系统
- 🎨 **作品集展示** - 展示个人项目和作品
- 🌓 **深色模式** - 支持明暗主题切换
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **SEO 优化** - 内置 SEO 最佳实践
- 📡 **RSS 订阅** - 自动生成 RSS Feed

### 页面模块
- **首页** - 个人简介和最新动态
- **关于我** - 详细的个人介绍
- **文章** - 博客文章列表和详情
- **项目** - 作品和项目展示
- **演讲** - 演讲和分享记录
- **工具箱** - 常用工具和资源分享

## 🎨 个性化配置

### 更新个人信息
1. 编辑 `src/app/page.tsx` 中的个人简介
2. 替换 `src/images/avatar.jpg` 和 `src/images/portrait.jpg` 为你的照片
3. 修改 `src/components/Header.tsx` 中的导航菜单
4. 更新 `src/components/Footer.tsx` 中的页脚信息

### 添加新文章
在 `src/app/articles/` 目录下创建新的文件夹和 MDX 文件：

```bash
mkdir src/app/articles/my-new-article
touch src/app/articles/my-new-article/page.mdx
```

## 🌐 社交媒体

- **X (Twitter)**: [@shuimuyicom](https://x.com/shuimuyicom)
- **小红书**: [水木易](https://www.xiaohongshu.com/user/profile/67c43e27000000000601de46)
- **B站**: [水木易](https://space.bilibili.com/3546693144414341)
- **微信公众号**: [水木易](https://mp.weixin.qq.com/s/KiXFC1ajCoU0jy-ThpV7ng)

## 📦 Tailwind CSS v4 特性

本项目使用 Tailwind CSS v4，主要特性包括：

- 不再需要 `tailwind.config.js` 文件
- 使用 CSS 文件直接配置（`src/styles/tailwind.css`）
- 支持 `@theme` 指令定义设计系统
- 更快的构建速度和更小的输出体积

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 设置环境变量 `NEXT_PUBLIC_SITE_URL`
4. 自动部署完成

### 其他部署选项
- [Netlify](https://www.netlify.com)
- [Railway](https://railway.app)
- 自托管（使用 `npm run build` 和 `npm run start`）

## 📚 文档资源

- [个人网站搭建指南](个人网站搭建指南.md) - 详细的搭建和配置说明
- [网站配置管理完整指南](网站配置管理完整指南.md) - 全面的管理和维护文档
- [如何开始写博客](如何开始写博客.md) - 博客写作入门指南

## 🤝 贡献

欢迎提出建议和改进意见！如果你有好的想法，请：

1. Fork 这个项目
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本网站模板是基于 [Tailwind Plus 许可证](https://tailwindcss.com/plus/license) 的商业产品。

## 🙏 致谢

- 感谢 Tailwind Plus 提供的优秀模板
- 感谢所有开源项目的贡献者
- 感谢每一位访问者的支持

## 📞 联系方式

如有任何问题或建议，欢迎通过社交媒体联系我，或在 GitHub 上提交 Issue。

---

**用代码创造有温度的世界** 💻❤️
