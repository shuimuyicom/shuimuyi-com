import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  XIcon,
  XiaohongshuIcon,
  TelegramIcon,
  WechatIcon,
} from '@/components/SocialIcons'
import { getExternalLinkProps } from '@/lib/links'
import { generatePageMetadata } from '@/lib/seo'
import portraitImage from '@/images/portrait.jpg'
import type { Metadata } from 'next'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  const externalProps = getExternalLinkProps(href)

  return (
    <li className={clsx(className, 'flex')}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-800 dark:text-zinc-200 dark:hover:text-sky-800"
        {...externalProps}
      >
        <Icon className="h-6 w-6 flex-none text-zinc-500 transition group-hover:text-sky-800 dark:text-zinc-400 dark:group-hover:text-sky-700" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = generatePageMetadata({
  title: '关于我',
  description:
    '我是水木易，连续创业者、产品经理、程序员与哲学思考者，关注科技与人文的交汇。',
  path: '/about',
})

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            连续创业 · 产品经理 · 程序员 · 哲学僧
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              关于我：理科生，计算机科班出身，后来读了哲学硕士。从工程到产品，再到创业，我一直在用技术解决真实问题，也在反复追问“我们为什么要这样做”。
            </p>
            <p>
              我试图以科技精神，重构人文价值：用理性与实践检验想法，用产品与代码把思想落地，让技术更有温度、更有方向。
            </p>
            <p>
              我会聊科技互联网、产品方法、编程实践，也会聊哲学与人文历史。希望在快速变化的时代里，保留对意义的敏感与对事实的尊重。
            </p>
            <p>
              如果你也关注技术与哲学的交汇，或在寻找更有价值导向的产品与创业方向，欢迎交流。
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/ohmuyi" icon={XIcon}>
              在 X 上关注
            </SocialLink>
            <SocialLink href="https://www.xiaohongshu.com/user/profile/67c43e27000000000601de46" icon={XiaohongshuIcon} className="mt-4">
              小红书主页
            </SocialLink>
            <SocialLink href="https://t.me/shuimuyi" icon={TelegramIcon} className="mt-4">
              Telegram
            </SocialLink>
            <SocialLink href="https://mp.weixin.qq.com/s/KiXFC1ajCoU0jy-ThpV7ng" icon={WechatIcon} className="mt-4">
              微信公众号
            </SocialLink>
            <SocialLink
              href="mailto:hi@shuimuyi.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              shuimuyicom@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
