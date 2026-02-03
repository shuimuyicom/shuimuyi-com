import rehypePrettyCode from 'rehype-pretty-code'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },

  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 24小时
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 压缩优化
  compress: true,

  // 实验性功能（根据需要使用）
  experimental: {
    // typedRoutes: true, // 需要时使用
    // ppr: true, // Partial Prerendering，需要时使用
  },

  // HTTP Headers 安全配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // 静态资源长期缓存
        source: '/(.*\\.(?:jpg|jpeg|gif|png|svg|webp|ico|woff|woff2|ttf|otf))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // 暂时注释掉 remarkPlugins
    // Next.js 16 + @next/mdx 15+ 中，remarkPlugins 包含的函数无法被序列化
    // 会导致 "does not have serializable options" 错误
    // 如需使用 remarkGfm，建议在 mdx-components.tsx 中处理
  },
})

export default withMDX(nextConfig)
