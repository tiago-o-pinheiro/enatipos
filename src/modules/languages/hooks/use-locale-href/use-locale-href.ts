'use client'

import { useCallback } from 'react'

import { useLanguageContext } from '../../stores/language-store'
import { withLocale } from '../../utils/locale-path'

export type LocaleHref = (path: string) => string

export const useLocaleHref = (): LocaleHref => {
  const { language } = useLanguageContext()
  return useCallback((path: string) => withLocale(path, language), [language])
}
