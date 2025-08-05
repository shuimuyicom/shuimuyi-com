import { type StaticImageData } from 'next/image'
import logoZentomato from '@/images/logos/zentomato.jpg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
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
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]