# Spotlight

Spotlight is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## 技术栈

本项目使用最新稳定版本的现代化技术栈：

- **[Next.js](https://nextjs.org)** (v15.4.1) - React 全栈框架
- **[React](https://react.dev)** (v19.1.0) - UI 库
- **[Tailwind CSS](https://tailwindcss.com)** (v4.1.11) - 实用优先的 CSS 框架
- **[TypeScript](https://www.typescriptlang.org)** (v5.8.3) - JavaScript 的类型化超集
- **[MDX](https://mdxjs.com)** (v3.1.0) - Markdown 中使用 JSX
- **[Headless UI](https://headlessui.dev)** (v2.2.4) - 无样式的 UI 组件

## 系统要求

- Node.js 22.17.1 或更高版本
- npm 10.9.2 或更高版本

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## 可用脚本

在项目目录中，您可以运行：

- `npm run dev` - 在开发模式下运行应用（支持热重载）
- `npm run build` - 构建用于生产的应用
- `npm run start` - 运行构建后的生产版本
- `npm run lint` - 运行 ESLint 进行代码检查

## 项目结构

```
├── src/
│   ├── app/              # Next.js App Router 页面
│   ├── components/       # React 组件
│   ├── images/          # 图片资源
│   ├── lib/             # 工具函数和库
│   └── styles/          # 全局样式和 Tailwind 配置
├── public/              # 静态资源
├── package.json         # 项目依赖和脚本
├── next.config.mjs      # Next.js 配置
├── tsconfig.json        # TypeScript 配置
└── tailwind.config.js   # Tailwind CSS 配置（v4 不需要）
```

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

### 个性化步骤

1. **更新个人信息**：编辑 `src/app/page.tsx` 中的内容
2. **替换头像**：更新 `src/images/avatar.jpg` 和 `src/images/portrait.jpg`
3. **修改导航**：编辑 `src/components/Header.tsx`
4. **添加文章**：在 `src/app/articles/` 目录下创建新的 MDX 文件

## Tailwind CSS v4 特性

本项目使用 Tailwind CSS v4，主要特性包括：

- 不再需要 `tailwind.config.js` 文件
- 使用 CSS 文件直接配置（`src/styles/tailwind.css`）
- 支持 `@theme` 指令定义设计系统
- 更快的构建速度和更小的输出体积

## 部署

推荐使用 [Vercel](https://vercel.com) 部署：

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

其他部署选项：
- [Netlify](https://www.netlify.com)
- [Railway](https://railway.app)
- 自托管（使用 `npm run build` 和 `npm run start`）

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [React](https://react.dev) - the official React documentation
- [TypeScript](https://www.typescriptlang.org/docs) - the official TypeScript documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation

## 故障排除

如果遇到问题，请尝试：

1. 删除 `node_modules` 和 `package-lock.json`，然后重新安装：
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. 确保使用正确的 Node.js 版本（22.17.1）

3. 检查所有环境变量是否正确设置

4. 查看控制台错误信息获取更多详情
