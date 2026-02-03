import type { Metadata, Viewport } from 'next'

/**
 * 站点核心配置
 * 集中管理所有 SEO 和站点元数据
 */
export const siteConfig = {
  // 基础信息
  name: '水木易',
  title: '水木易 - 产品经理 | 哲学硕士 | 中华国学探索者',
  shortTitle: '水木易',
  description:
    '我是水木易，作为终身学习者和中华国学探索者，试图在产品管理和哲学思考之间寻找平衡，用代码构建有温度的应用。',

  // 站点 URL
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shuimuyi.com',

  // OG 图片
  ogImage: {
    url: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: '水木易 - 产品经理 | 哲学硕士 | 中华国学探索者',
  },

  // 社交链接
  links: {
    twitter: 'https://twitter.com/ohmuyi',
    github: 'https://github.com/shuimuyicom',
    blog: 'https://blog.shuimuyi.com',
  },

  // 作者信息
  author: {
    name: '水木易',
    email: 'shuimuyicom@gmail.com',
    twitter: '@ohmuyi',
  },

  // 多语言支持
  locale: 'zh-CN',
  alternateLocales: ['en-US'],
} as const

// 类型导出
export type SiteConfig = typeof siteConfig

/**
 * 生成基础 Metadata 配置
 * 用于 layout.tsx
 */
export function generateBaseMetadata(
  override?: Partial<Metadata>
): Metadata {
  return {
    // 基础元数据
    metadataBase: new URL(siteConfig.url),
    title: {
      template: '%s - 水木易',
      default: siteConfig.title,
      absolute: siteConfig.title,
    },
    description: siteConfig.description,
    keywords: [
      '水木易',
      'Vibe Coder',
      '终身学习者',
      '中华国学',
      '产品经理',
      '哲学思考',
      '前端开发',
      'Next.js',
      'React',
      '命理学',
      '中医养生',
    ],

    // 作者信息
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,

    // Open Graph
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      alternateLocale: [...siteConfig.alternateLocales],
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage.url,
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          alt: siteConfig.ogImage.alt,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage.url],
      creator: siteConfig.author.twitter,
      site: siteConfig.author.twitter,
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // 备用链接
    alternates: {
      canonical: siteConfig.url,
      types: {
        'application/rss+xml': `${siteConfig.url}/feed.xml`,
      },
    },

    // 其他元数据
    category: 'technology',
    classification: 'Personal Website',
    referrer: 'strict-origin-when-cross-origin',
    generator: 'Next.js',

    ...override,
  }
}

/**
 * Viewport 配置
 * 从 Metadata 中分离出来，避免重复渲染警告
 */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light',
}

/**
 * 为特定页面生成 Metadata
 */
export function generatePageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
}: {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image || siteConfig.ogImage.url

  return {
    title: `${title} - ${siteConfig.name}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
