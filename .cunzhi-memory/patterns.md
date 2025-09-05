# 常用模式和最佳实践

- 社交链接在新标签页打开：使用普通a标签替代Next.js Link组件，添加target="_blank"和rel="noopener noreferrer"属性，但邮件链接保持原有行为。位置：about页面的SocialLink组件。
