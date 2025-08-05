import { ArticleStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData'
import { siteConfig } from '@/lib/seo'
import { type ArticleWithSlug } from '@/lib/articles'

interface ArticleWrapperProps {
  article: ArticleWithSlug
  children: React.ReactNode
}

export function ArticleWrapper({ article, children }: ArticleWrapperProps) {
  const breadcrumbItems = [
    { name: '首页', url: siteConfig.url },
    { name: '文章', url: `${siteConfig.url}/articles` },
    { name: article.title, url: `${siteConfig.url}/articles/${article.slug}` },
  ]

  return (
    <>
      <ArticleStructuredData
        title={article.title}
        description={article.description}
        date={article.date}
        author={article.author}
        slug={article.slug}
      />
      {BreadcrumbStructuredData(breadcrumbItems)}
      {children}
    </>
  )
}