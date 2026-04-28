import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DEFAULT_LANGUAGE } from '@/modules/languages/languages.constants'
import { type Language } from '@/modules/languages/languages.types'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { MBTI_TYPES, type MbtiType } from '@/modules/mbti/mbti.types'
import { TypeDetailView } from '@/modules/mbti/views/type-detail'
import { translations } from '@/translations'
import { type TranslationKey } from '@/translations/translation.types'

type Params = { locale: string; code: string }
type PageProps = {
  params: Promise<Params>
}

const isMbtiType = (value: string): value is MbtiType =>
  (MBTI_TYPES as readonly string[]).includes(value)

const t = (key: TranslationKey, language: Language): string =>
  translations[language][key] ?? translations[DEFAULT_LANGUAGE][key] ?? key

export const generateStaticParams = (): { code: string }[] =>
  MBTI_TYPES.map((code) => ({ code }))

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, code } = await params
  if (!isLanguage(locale)) return {}
  if (!isMbtiType(code)) return {}

  const name = t(`mbti.type.${code}.name` as TranslationKey, locale)
  const subtitle = t(`mbti.type.${code}.subtitle` as TranslationKey, locale)
  const essence = t(`mbti.type.${code}.essence` as TranslationKey, locale)

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
      locale,
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
