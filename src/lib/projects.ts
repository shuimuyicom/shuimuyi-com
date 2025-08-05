import { type StaticImageData } from 'next/image'
import logoZentomato from '@/images/logos/zentomato.jpg'
import logoXuanji from '@/images/logos/xuanji.jpg'
import logoShihenys from '@/images/logos/shihenys.jpg'

export interface Project {
  name: string
  description: string
  link: {
    href: string
    label: string
  }
  logo: StaticImageData
}

export const projects: Project[] = [
  {
    name: '时辰养生（iOS&macOS）',
    description:
      '一款基于传统中医时辰养生理论的应用，采用现代简约的东方设计美学，帮助用户了解十二时辰的养生智慧，顺应自然规律，养护身心健康。',
    link: { href: 'https://apps.apple.com/cn/app/id6743342637', label: '时辰养生.app' },
    logo: logoShihenys,
  },
  {
    name: '禅番茄（macOS）',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoZentomato,
  },
  {
    name: '玄机AI（播客）',
    description:
      '这是一档由「水木易」主理，致力于在现代视角下重新诠释玄学术数的奥妙，深度探讨东西方智慧的泛哲学播客，欢迎订阅收听。',
    link: { href: 'https://www.xiaoyuzhoufm.com/podcast/6837de815718419818dbcd97', label: '玄机AI.fm' },
    logo: logoXuanji,
  },
  // 注意：已移除 cosmOS 和 OpenShuttle 示例项目
]