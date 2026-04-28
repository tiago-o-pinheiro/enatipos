import { type Language } from '@/modules/languages/languages.types'

import { translations as ca } from './ca'
import { translations as en } from './en'
import { translations as es } from './es'
import { translations as pt } from './pt'
import { type TranslationKey } from './translation.types'

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en,
  es,
  pt,
  ca,
}
