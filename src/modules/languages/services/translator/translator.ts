import { translations } from '@/translations'
import { type TranslationKey } from '@/translations/translation.types'

import { type Interpolation, type Language } from '../../languages.types'

const interpolate = (text: string, replace: Interpolation | null): string => {
  if (!replace) return text
  return text.replaceAll(/\${([^${}]*)}/g, (placeholder, key) => {
    const value = replace[key]
    return value !== undefined ? String(value) : placeholder
  })
}

export const translate = (
  id: TranslationKey,
  language: Language,
  replace?: Interpolation,
): string => {
  const bundle = translations[language]
  const text = bundle[id] ?? translations.en[id] ?? id
  return interpolate(text, replace ?? null)
}
