import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_QUERY_PARAM,
} from '@/modules/languages/languages.constants'
import { type Language } from '@/modules/languages/languages.types'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { TypeDetailView } from '@/modules/mbti/views/type-detail'
import { MBTI_TYPES, type MbtiType } from '@/modules/mbti/mbti.types'
import { translations } from '@/translations'
import { type TranslationKey } from '@/translations/translation.types'

type Params = { code: string }
type SearchParams = Record<string, string | string[] | undefined>
type PageProps = {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}

const isMbtiType = (value: string): value is MbtiType =>
  (MBTI_TYPES as readonly string[]).includes(value)

const resolveLanguage = (sp: SearchParams): Language => {
  const raw = sp[LANGUAGE_QUERY_PARAM]
  const value = Array.isArray(raw) ? raw[0] : raw
  return isLanguage(value) ? value : DEFAULT_LANGUAGE
}

const t = (key: TranslationKey, language: Language): string =>
  translations[language][key] ?? translations[DEFAULT_LANGUAGE][key] ?? key

export const generateStaticParams = (): Params[] =>
  MBTI_TYPES.map((code) => ({ code }))

export const generateMetadata = async ({
  params,
  searchParams,
}: PageProps): Promise<Metadata> => {
  const { code } = await params
  if (!isMbtiType(code)) return {}

  const language = resolveLanguage(await searchParams)
  const name = t(`mbti.type.${code}.name` as TranslationKey, language)
  const subtitle = t(`mbti.type.${code}.subtitle` as TranslationKey, language)
  const essence = t(`mbti.type.${code}.essence` as TranslationKey, language)

  const title = `${code} — ${name} · Enatipos`
  const description = `${subtitle}. ${essence}.`
  const image = `/images/mbti/${code}.png`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [{ url: image, width: 1254, height: 1254, alt: `${code} — ${name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

const Page = async ({ params }: PageProps) => {
  const { code } = await params
  if (!isMbtiType(code)) notFound()
  return <TypeDetailView code={code} />
}

// eslint-disable-next-line import/no-default-export
export default Page
