import { MetadataRoute } from 'next'
// {{ AURA-X: 注释文章功能 - sitemap不再包含文章路径. Approval: 寸止(ID:1738054400). }}
// import { getAllArticles } from '@/lib/articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shuimuyi.com'
  
  // {{ AURA-X: 注释文章功能 - 不再获取文章数据. Approval: 寸止(ID:1738054400). }}
  // const articles = await getAllArticles()
  
  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/speaking`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
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