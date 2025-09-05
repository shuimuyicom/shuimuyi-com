# 常用模式和最佳实践

- 社交链接在新标签页打开：使用普通a标签替代Next.js Link组件，添加target="_blank"和rel="noopener noreferrer"属性，但邮件链接保持原有行为。位置：about页面的SocialLink组件。
- 导航栏外部链接处理模式：在Header.tsx和Footer.tsx的导航组件中，通过检测href是否以'http'开头来区分外部链接。外部链接使用普通a标签并添加target="_blank"和rel="noopener noreferrer"属性，内部链接继续使用Next.js Link组件。已应用到MobileNavItem、NavItem和NavLink组件。博客链接已从/articles改为https://blog.shuimuyi.com。
