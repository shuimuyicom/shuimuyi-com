import rehypePrettyCode from 'rehype-pretty-code'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, {
        // 使用 GitHub 主题，支持亮色和暗色模式
        theme: {
          dark: 'github-dark-dimmed',
          light: 'github-light'
        },
        // 保持背景色
        keepBackground: false,
        // 默认语言设置
        defaultLang: {
          block: 'plaintext',
          inline: 'plaintext'
        }
      }]
    ],
  },
})

export default withMDX(nextConfig)
