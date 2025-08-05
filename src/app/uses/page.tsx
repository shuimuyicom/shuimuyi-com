/**
 * 此页面暂时隐藏 - 2025-08-02
 * 导航栏中的"工具箱"链接已被注释
 * 如需重新启用：
 * 1. 在 src/components/Header.tsx 和 Footer.tsx 中取消注释相关导航项
 * 2. 注释或删除下方的 notFound() 调用
 */

import { notFound } from 'next/navigation'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: '工具箱',
  description: '我使用的软件、喜爱的设备，以及其他推荐的好物。',
}

export default function Uses() {
  // 临时隐藏此页面 - 基于最佳实践，避免使用中间件
  notFound()
  
  // 以下为原页面内容（暂时不会执行）
  return (
    <SimpleLayout
      title="我的工具箱：软件、设备和其他好物推荐"
      intro="作为一名 Vibe Coder，选择合适的工具能够极大地提升工作效率和创作体验。这里分享我日常使用的各种工具和设备，希望能给你一些参考。"
    >
      <div className="space-y-20">
        <ToolsSection title="工作站">
          <Tool title="MacBook Pro 14寸 M3 Pro">
            苹果的 M 系列芯片确实改变了游戏规则。无论是编译代码还是运行虚拟机，
            这台机器都能轻松应对，而且续航能力惊人。
          </Tool>
          <Tool title="明基 SW270C 显示器">
            27寸 2K 专业显示器，色彩准确度极高。对于前端开发和设计工作来说，
            好的显示器真的能让你看到更多细节。
          </Tool>
          <Tool title="HHKB Professional Hybrid Type-S">
            静电容键盘的手感无可替代。虽然价格不菲，但对于每天要敲击数万次键盘的人来说，
            这是一项值得的投资。
          </Tool>
          <Tool title="罗技 MX Master 3">
            最好用的生产力鼠标之一。横向滚轮和自定义按键极大提升了工作效率，
            尤其是在处理大型代码文件时。
          </Tool>
          <Tool title="网易严选人体工学椅">
            长时间编程需要一把好椅子。这款椅子性价比很高，
            腰部支撑到位，久坐不累。
          </Tool>
        </ToolsSection>
        <ToolsSection title="开发工具">
          <Tool title="Visual Studio Code">
            最流行的代码编辑器，插件生态系统强大。配合 GitHub Copilot，
            编程效率直接起飞。
          </Tool>
          <Tool title="Warp">
            下一代终端工具，内置 AI 助手，支持工作流自动化。
            让命令行操作变得更加智能和高效。
          </Tool>
          <Tool title="TablePlus">
            优秀的数据库管理工具，支持多种数据库。界面简洁，
            操作直观，是开发者的得力助手。
          </Tool>
          <Tool title="Postman">
            API 开发和测试的必备工具。从简单的请求测试到复杂的自动化测试，
            Postman 都能轻松应对。
          </Tool>
        </ToolsSection>
        <ToolsSection title="设计工具">
          <Tool title="Figma">
            协作设计的王者。不仅是设计工具，更是团队沟通的桥梁。
            实时协作功能让设计评审变得无比高效。
          </Tool>
          <Tool title="Arc">
            重新定义了浏览器体验。独特的侧边栏设计和空间管理，
            让多任务处理变得轻松自如。
          </Tool>
        </ToolsSection>
        <ToolsSection title="生产力工具">
          <Tool title="Raycast">
            Mac 上最强大的启动器。内置了大量实用功能，
            从快速计算到剪贴板管理，大大提升日常效率。
          </Tool>
          <Tool title="Obsidian">
            我的第二大脑。用于知识管理和笔记记录，
            双向链接功能让知识之间产生奇妙的连接。
          </Tool>
          <Tool title="Notion">
            全能的协作平台。从项目管理到知识库，
            从个人笔记到团队协作，Notion 都能完美胜任。
          </Tool>
          <Tool title="1Password">
            密码管理的最佳选择。在保证安全的同时，
            也让登录各种服务变得无比便捷。
          </Tool>
        </ToolsSection>
        <ToolsSection title="学习资源">
          <Tool title="GitHub">
            全球最大的代码托管平台，也是学习的宝库。
            通过阅读优秀的开源项目，我学到了很多最佳实践。
          </Tool>
          <Tool title="MDN Web Docs">
            Web 开发者的圣经。遇到任何前端问题，
            MDN 总能给出最权威的答案。
          </Tool>
          <Tool title="LeetCode">
            算法练习平台。保持算法思维的敏锐，
            对提升编程能力很有帮助。
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
