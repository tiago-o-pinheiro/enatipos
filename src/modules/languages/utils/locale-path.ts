import { LANGUAGES } from '../languages.constants'
import { type Language } from '../languages.types'

const LOCALES_PATTERN = LANGUAGES.join('|')
const LOCALE_PREFIX_RE = new RegExp(`^/(?:${LOCALES_PATTERN})(?=/|$)`)

export const stripLocale = (pathname: string): string => {
  const stripped = pathname.replace(LOCALE_PREFIX_RE, '')
  return stripped === '' ? '/' : stripped
}

export const withLocale = (
  pathname: string,
  locale: Language,
): string => {
  const tail = stripLocale(pathname)
  return tail === '/' ? `/${locale}` : `/${locale}${tail}`
}
