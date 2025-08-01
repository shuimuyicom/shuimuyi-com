import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

// 声明 webpack require.context 类型
declare const require: {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => {
    keys: () => string[]
  }
}

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shuimuyi.com'

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: '水木易',
    email: 'contact@shuimuyi.com',
  }

  let feed = new Feed({
    title: '水木易的个人博客',
    description: '我是水木易，一名 Vibe Coder。作为终身学习者和中华国学探索者，我在产品管理和哲学思考之间寻找平衡，用代码构建有温度的数字世界。',
    author,
    id: siteUrl,
    link: siteUrl,
    language: 'zh-CN',
    image: `${siteUrl}/og-image.jpg`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `版权所有 © ${new Date().getFullYear()} 水木易`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
    generator: 'Next.js',
  })

  let articleIds = require
    .context('../articles', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

  for (let id of articleIds) {
    let url = String(new URL(`/articles/${id}`, req.url))
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/articles/${id}`
    let article = $('article').first()
    let title = article.find('h1').first().text()
    let date = article.find('time').first().attr('datetime')
    let content = article.find('[data-mdx-content]').first().html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
