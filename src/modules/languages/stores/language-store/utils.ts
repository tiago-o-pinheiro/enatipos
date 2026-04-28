import { LANGUAGES } from '../../languages.constants'
import { type Language } from '../../languages.types'

export const isLanguage = (value: unknown): value is Language =>
  typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value)
