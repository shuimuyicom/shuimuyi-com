import Link from 'next/link'
import clsx from 'clsx'

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'group relative flex flex-col items-start',
        // 添加优雅的阴影效果
        'rounded-2xl p-6',
        'shadow-sm hover:shadow-md',
        'transition-shadow duration-300 ease-in-out',
        'ring-1 ring-zinc-900/5',
        'dark:shadow-zinc-800/5 dark:ring-zinc-800/10'
      )}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  href,
  ...props
}: {
  href: string
  children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'>) {
  // 检测外部链接
  const isExternalLink = href.startsWith('http')
  
  return (
    <>
      <div className="absolute inset-0 z-0 scale-95 bg-zinc-50/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 rounded-2xl dark:bg-zinc-800/30" />
      {isExternalLink ? (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          <span className="absolute inset-0 z-20 rounded-2xl" />
          <span className="relative z-10">{children}</span>
        </a>
      ) : (
        <Link href={href} {...props}>
          <span className="absolute inset-0 z-20 rounded-2xl" />
          <span className="relative z-10">{children}</span>
        </Link>
      )}
    </>
  )
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T
  href?: string
}) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-sky-800"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T
  decorate?: boolean
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
