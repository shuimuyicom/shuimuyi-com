export const siteConfig = {
  name: '水木易',
  title: '水木易 - Vibe Coder | 终身学习者 | 中华国学探索者',
  description: '我是水木易，一名 Vibe Coder。作为终身学习者和中华国学探索者，我在产品管理和哲学思考之间寻找平衡，用代码构建有温度的数字世界。',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shuimuyi.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/shuimuyi',
    github: 'https://github.com/shuimuyi',
  },
  author: {
    name: '水木易',
    email: 'contact@shuimuyi.com',
    twitter: '@shuimuyi',
  },
}

export type SiteConfig = typeof siteConfig