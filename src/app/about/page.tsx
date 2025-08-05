import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  XIcon,
  XiaohongshuIcon,
  BilibiliIcon,
  WechatIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-violet-600 dark:text-zinc-200 dark:hover:text-violet-600"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-violet-600" />
        <span className="ml-4">{children}</span>
      </Link>
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

export const metadata: Metadata = {
  title: '关于我',
  description:
    '我是水木易，一名Vibe Coder。在代码与哲学之间寻找平衡，用技术创造有温度的世界。',
}

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
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            水木易：Vibe Coder；产品经理；哲学硕士；
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              作为一名终身学习者，我始终保持着对知识的渴望和对世界的好奇心。
              我的身份标签横跨多个领域：☯️中华国学探索者、🧑‍💻Vibe Coder ← 🐶产品经理 ← 🤔哲学硕士。
            </p>
            <p>
              我相信技术不仅仅是冰冷的代码，而是连接人与人之间的桥梁。
              作为一名 Vibe Coder，我致力于创造有温度、有灵魂的数字产品，
              让技术真正服务于人，改善人们的生活。
            </p>
            <p>
              在产品管理的实践中，我学会了如何将用户需求转化为优雅的解决方案。
              哲学的训练让我能够从更高的维度思考问题，而对中华国学的探索，
              则让我在东方智慧中找到了平衡技术与人文的方法。
            </p>
            <p>
              现在，我正在用代码构建自己的数字世界，分享学习心得，
              记录成长历程。我相信，当技术与人文相遇，当理性与感性交融，
              我们能创造出真正有价值、有意义的作品。
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/shuimuyicom" icon={XIcon}>
              在 X 上关注
            </SocialLink>
            <SocialLink href="https://www.xiaohongshu.com/user/profile/67c43e27000000000601de46" icon={XiaohongshuIcon} className="mt-4">
              小红书主页
            </SocialLink>
            <SocialLink href="https://space.bilibili.com/3546693144414341" icon={BilibiliIcon} className="mt-4">
              B站空间
            </SocialLink>
            <SocialLink href="https://mp.weixin.qq.com/s/KiXFC1ajCoU0jy-ThpV7ng" icon={WechatIcon} className="mt-4">
              微信公众号
            </SocialLink>
            <SocialLink
              href="mailto:hi@shuimuyi.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hi@shuimuyi.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
