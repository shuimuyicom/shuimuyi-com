export const siteConfig = {
  name: '水木易',
  title: '水木易 - 产品经理 | 哲学硕士 | 中华国学探索者',
  description: '我是水木易，作为终身学习者和中华国学探索者，试图在产品管理和哲学思考之间寻找平衡，用代码构建有温度的应用。',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shuimuyi.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/ohmuyi',
    github: 'https://github.com/shuimuyicom',
  },
  author: {
    name: '水木易',
    email: 'shuimuyicom@gmail.com',
    twitter: '@ohmuyi',
  },
}

export type SiteConfig = typeof siteConfig