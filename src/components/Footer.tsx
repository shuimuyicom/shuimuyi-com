import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  // 检测外部链接
  const isExternalLink = href.startsWith('http')
  
  if (isExternalLink) {
    return (
      <a
        href={href}
        className="transition hover:text-violet-600 dark:hover:text-violet-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
  
  return (
    <Link
      href={href}
      className="transition hover:text-violet-600 dark:hover:text-violet-500"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">首页</NavLink>
                <NavLink href="/projects">项目</NavLink>
                <NavLink href="https://blog.shuimuyi.com">博客</NavLink>
                <NavLink href="/about">关于我</NavLink>
                {/* 暂时隐藏以下导航项 - 2025-08-02 */}
                {/* <NavLink href="/speaking">演讲</NavLink> */}
                {/* <NavLink href="/uses">工具箱</NavLink> */}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} 水木易. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
