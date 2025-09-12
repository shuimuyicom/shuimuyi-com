import { type Metadata } from 'next'
import Image from 'next/image'
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
  // 邮件链接不需要在新标签页打开
  const isEmailLink = href.startsWith('mailto:')
  
  return (
    <li className={clsx(className, 'flex')}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-800 dark:text-zinc-200 dark:hover:text-sky-800"
        {...(!isEmailLink && { 
          target: "_blank", 
          rel: "noopener noreferrer" 
        })}
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-800" />
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

export const metadata: Metadata = {
  title: '关于我',
  description:
    '我是水木易，试图在代码与哲学之间寻找平衡，用技术创造有温度的世界。',
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
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            产品经理 · 哲学硕士 · 中华国学探索者
          </h2>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            关于我：拥有计算机本科和哲学硕士的跨领域知识背景，并积累了七年多产品经理的丰富实战经验。
            </p>
            <p>
              正在探索：正所谓命由天定，运由己求。在AI技术蓬勃发展的今天，我正致力于成为一名专注易学命理学与中医养生领域的独立开发者。
            </p>
            <p>
            我深信中华国学中蕴含着丰富的智慧宝藏，尤其在易学命理学与中医养生体系中，包含了对人与自然、身与心和谐共生的深刻洞察。我期望能够将源远流长的传统文化与前沿AI技术完美融合，打造出更多实用工具，帮助更多人把握自身命运，开创更健康、更和谐的人生。
            </p>
            <p>
            在这里，我将与大家分享我的学习心得、深度思考和人生感悟，同时展示我正在开发的创新项目。我会持续更新内容，为大家带来新的见解和发现。 
            </p>
            <p>
            如果你对我在AI与中华国学交融领域的探索感兴趣，特别是在易学命理或中医养生方面有所思考，诚挚欢迎与我交流切磋。期待能与你一同探讨如何让AI技术为中国传统文化注入新的活力，共同传承和创新这份宝贵的文化遗产。
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
              shuimuyicom@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
