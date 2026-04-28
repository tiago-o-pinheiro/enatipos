import { LANGUAGES } from './languages.constants'

export type Language = (typeof LANGUAGES)[number]

export type Interpolation = Record<string, string | number>
