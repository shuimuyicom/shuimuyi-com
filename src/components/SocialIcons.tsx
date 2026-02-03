type BrandIconProps = React.ComponentPropsWithoutRef<'svg'> & {
  body: string
}

const ARCTICONS_VIEWBOX = '0 0 48 48'

const ICON_X_TWITTER =
  '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.74 16.55v1c0 10.07-7.64 21.61-21.62 21.61A21.14 21.14 0 0 1 5.5 35.71a12 12 0 0 0 1.81.11a15.25 15.25 0 0 0 9.44-3.24a7.56 7.56 0 0 1-7.1-5.29a7 7 0 0 0 1.44.15a7.5 7.5 0 0 0 2-.27A7.57 7.57 0 0 1 7 19.72v-.1a7.4 7.4 0 0 0 3.44.94A7.54 7.54 0 0 1 8.05 10.5a21.58 21.58 0 0 0 15.68 7.94a6.4 6.4 0 0 1-.21-1.74a7.55 7.55 0 0 1 13.17-5.31a15.6 15.6 0 0 0 4.83-1.85a7.65 7.65 0 0 1-3.39 4.27a15.9 15.9 0 0 0 4.37-1.26a15.6 15.6 0 0 1-3.76 4"/>'
const ICON_TELEGRAM =
  '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.83 8.48c1.14 0 2 1 1.54 2.86l-5.58 26.3c-.39 1.87-1.52 2.32-3.08 1.45L20.4 29.26a.4.4 0 0 1 0-.65l15.37-13.88c.7-.62-.15-.92-1.07-.36L15.41 26.54a.46.46 0 0 1-.4.05L6.82 24C5 23.47 5 22.22 7.23 21.33L40 8.69a2.2 2.2 0 0 1 .83-.21"/>'
const ICON_BILIBILI =
  '<rect width="35.733" height="26.558" x="6.134" y="9.403" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.753"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.483 4.5l2.925 4.903m-7.149 12.282l6.824-2.726M30.517 4.5l-2.925 4.903m7.149 12.282l-6.824-2.726m1.137 5.957c-.582 1.472-1.15 2.54-2.527 2.54c-1.074 0-1.666-.498-2.527-1.836c-.861 1.338-1.453 1.836-2.527 1.836c-1.377 0-1.945-1.068-2.527-2.54m7.022 11.045v2.033s8.691.29 8.691 5.506H13.341c0-5.217 8.691-5.506 8.691-5.506v-2.033"/>'
const ICON_WECHAT =
  '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 32.17a21.3 21.3 0 0 1-5.81-.71a2.63 2.63 0 0 0-1.45.24c-1.35.76-2.64 1.62-4.17 2.58c.28-1.27.46-2.38.78-3.45a1.31 1.31 0 0 0-.6-1.74c-4.65-3.28-6.61-8.2-5.14-13.26c1.36-4.68 4.69-7.51 9.22-9a15.47 15.47 0 0 1 16.89 4.94a15.1 15.1 0 0 1 2.71 7.55m-18.13-3a1.79 1.79 0 0 0-1.72-1.78a1.73 1.73 0 0 0-1.81 1.68a1.71 1.71 0 0 0 1.7 1.78a1.76 1.76 0 0 0 1.83-1.68m9.3-1.78a1.79 1.79 0 0 0-1.75 1.76a1.75 1.75 0 0 0 1.8 1.7a1.73 1.73 0 1 0 0-3.46Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.83 42.05c-1.22-.54-2.35-1.36-3.55-1.49s-2.45.57-3.69.69a12.36 12.36 0 0 1-10-3.27C18.22 33 19 25.46 25.17 21.41c5.49-3.6 13.55-2.4 17.42 2.6a9.88 9.88 0 0 1-1.14 13.8c-1.19 1.06-1.62 1.94-.86 3.33a4 4 0 0 1 .24.91m-14-13.52a1.44 1.44 0 1 0 0-2.88a1.44 1.44 0 1 0 0 2.88m9-2.88A1.43 1.43 0 0 0 34.44 27a1.42 1.42 0 1 0 2.84.12a1.43 1.43 0 0 0-1.41-1.47Z"/>'
const ICON_XIAOHONGSHU =
  '<rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.254 19.374v9.252m-5.781-7.776v7.776M24.95 20.85h3.047m-4.038 7.776h4.803m1.599-7.776h4.13c.49 0 .885.396.885.885v2.696"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.815 24.43h7.194a.99.99 0 0 1 .99.991v2.214a.99.99 0 0 1-.99.99h-1.83m1.859-7.308l.962-.89m-16.316 8.199h-2.118m-2.378-6.655l.697 5.07m-7.202-5.07L10 27.3m3.922-7.926v7.892c0 .75-.609 1.36-1.36 1.36H12.2m9.484-9.252l-1.367 3.253h1.866l-1.367 3.252h1.865"/>'

function BrandIcon({ body, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox={ARCTICONS_VIEWBOX}
      aria-hidden="true"
      strokeWidth={2}
      dangerouslySetInnerHTML={{ __html: body }}
      {...props}
    />
  )
}

export function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <BrandIcon body={ICON_X_TWITTER} {...props} />
}

export function XiaohongshuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <BrandIcon body={ICON_XIAOHONGSHU} {...props} />
}

export function BilibiliIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <BrandIcon body={ICON_BILIBILI} {...props} />
}

export function TelegramIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <BrandIcon body={ICON_TELEGRAM} {...props} />
}

export function WechatIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <BrandIcon body={ICON_WECHAT} {...props} />
}
