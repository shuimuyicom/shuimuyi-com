# Open Graph 图片设置指南

## 默认图片要求

请在 `public/` 目录下添加以下文件：

1. **og-image.jpg** - Open Graph 默认图片
   - 推荐尺寸：1200x630 像素
   - 格式：JPG 或 PNG
   - 文件大小：建议小于 5MB

2. **avatar.jpg** - 个人头像图片
   - 推荐尺寸：400x400 像素（正方形）
   - 格式：JPG 或 PNG
   - 用于结构化数据中的个人信息

## 文章特定图片

为每篇文章创建专属的 Open Graph 图片：

1. 在文章目录中添加 `og-image.jpg`
2. 在文章的 metadata 中指定：

```javascript
export const metadata = {
  title: article.title,
  description: article.description,
  openGraph: {
    images: [`/articles/${article.slug}/og-image.jpg`]
  }
}
```

## 图片设计建议

1. 包含文章标题
2. 添加网站品牌（水木易）
3. 使用一致的视觉风格
4. 确保文字在社交媒体缩略图中清晰可读

## 测试工具

- Facebook 分享调试器：https://developers.facebook.com/tools/debug/
- Twitter Card 验证器：https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector：https://www.linkedin.com/post-inspector/