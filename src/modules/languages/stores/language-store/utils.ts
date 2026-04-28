import {
  LANGUAGES,
  LANGUAGE_QUERY_PARAM,
} from '../../languages.constants'
import { type Language } from '../../languages.types'

export const isLanguage = (value: unknown): value is Language =>
  typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value)

export const readBrowserLanguage = (): Language | null => {
  if (typeof window === 'undefined') return null
  const raw = window.navigator.language?.slice(0, 2).toLowerCase()
  return isLanguage(raw) ? raw : null
}

export const readQueryLanguage = (): Language | null => {
  if (typeof window === 'undefined') return null
  const value = new URLSearchParams(window.location.search).get(
    LANGUAGE_QUERY_PARAM,
  )
  return isLanguage(value) ? value : null
}
