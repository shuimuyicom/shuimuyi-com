const externalHttpPattern = /^https?:\/\//i

export function isInternalHref(href: string) {
  return href.startsWith('#') || (href.startsWith('/') && !href.startsWith('//'))
}

export function isExternalHttpHref(href: string) {
  return href.startsWith('//') || externalHttpPattern.test(href)
}

export function getExternalLinkProps(href: string) {
  return isExternalHttpHref(href)
    ? { target: '_blank', rel: 'noopener noreferrer' as const }
    : {}
}
