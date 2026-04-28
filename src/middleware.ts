import { NextResponse, type NextRequest } from 'next/server'

import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
} from '@/modules/languages/languages.constants'
import { type Language } from '@/modules/languages/languages.types'

const LOCALES_PATTERN = LANGUAGES.join('|')
const HAS_LOCALE_RE = new RegExp(`^/(?:${LOCALES_PATTERN})(?:/|$)`)

const isLanguage = (value: string): value is Language =>
  (LANGUAGES as readonly string[]).includes(value)

const pickLocaleFromHeader = (header: string | null): Language => {
  if (!header) return DEFAULT_LANGUAGE
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return {
        tag: tag.toLowerCase().slice(0, 2),
        q: q ? Number.parseFloat(q) : 1,
      }
    })
    .sort((a, b) => b.q - a.q)
  for (const { tag } of ranked) {
    if (isLanguage(tag)) return tag
  }
  return DEFAULT_LANGUAGE
}

export const middleware = (request: NextRequest) => {
  const { pathname, search } = request.nextUrl
  if (HAS_LOCALE_RE.test(pathname)) return NextResponse.next()

  const locale = pickLocaleFromHeader(request.headers.get('accept-language'))
  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  url.search = search
  return NextResponse.redirect(url, 308)
}

export const config = {
  // Skip static assets, _next internals, the favicon and the public folder.
  matcher: ['/((?!_next/|images/|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)'],
}
