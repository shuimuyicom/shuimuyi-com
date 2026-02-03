import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'
// {{ AURA-X: 注释文章功能 - sitemap不再包含文章路径. Approval: 寸止(ID:1738054400). }}
// import { getAllArticles } from '@/lib/articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url
  const now = new Date()
  
  // {{ AURA-X: 注释文章功能 - 不再获取文章数据. Approval: 寸止(ID:1738054400). }}
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
    // {{ AURA-X: 注释文章功能 - 移除文章列表页sitemap. Approval: 寸止(ID:1738054400). }}
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
    // /speaking 和 /uses 当前返回 404，不应出现在 sitemap 中
  ]
  
  // {{ AURA-X: 注释文章功能 - 移除所有文章页面sitemap. Approval: 寸止(ID:1738054400). }}
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
