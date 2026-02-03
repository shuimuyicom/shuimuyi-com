import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'
// 文章列表已停用，暂不引入文章数据
// import { getAllArticles } from '@/lib/articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url
  const now = new Date()
  
  // const articles = await getAllArticles()
  
  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // 文章列表页已停用
    /*
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    */
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // /speaking 与 /uses 目前 404，不进 sitemap
  ]
  
  // 文章详情页已停用
  /*
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))
  */
  
  return [...staticPages]
}
