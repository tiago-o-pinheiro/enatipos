'use client'

import { useCallback } from 'react'

import { type TranslationKey } from '@/translations/translation.types'

import { type Interpolation } from '../../languages.types'
import { translate } from '../../services/translator'
import { useLanguageContext } from '../../stores/language-store'

export type TranslateFn = (
  id: TranslationKey,
  replace?: Interpolation,
) => string

export const useTranslate = (): TranslateFn => {
  const { language } = useLanguageContext()
  return useCallback(
    (id, replace) => translate(id, language, replace),
    [language],
  )
}
