import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  ENNEATYPE_IDS,
  type EnneatypeId,
} from '@/modules/enneatypes/enneatypes.types'
import { TypeDetailView } from '@/modules/enneatypes/views/type-detail'
import { DEFAULT_LANGUAGE } from '@/modules/languages/languages.constants'
import { type Language } from '@/modules/languages/languages.types'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { translations } from '@/translations'
import { type TranslationKey } from '@/translations/translation.types'

type Params = { locale: string; id: string }
type PageProps = {
  params: Promise<Params>
}

const parseEnneatypeId = (value: string): EnneatypeId | null => {
  const n = Number.parseInt(value, 10)
  return (ENNEATYPE_IDS as readonly number[]).includes(n)
    ? (n as EnneatypeId)
    : null
}

const t = (key: TranslationKey, language: Language): string =>
  translations[language][key] ?? translations[DEFAULT_LANGUAGE][key] ?? key

export const generateStaticParams = (): { id: string }[] =>
  ENNEATYPE_IDS.map((id) => ({ id: String(id) }))

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, id } = await params
  if (!isLanguage(locale)) return {}
  const type = parseEnneatypeId(id)
  if (type === null) return {}

  const name = t(`enneatype.${type}.name` as TranslationKey, locale)
  const subtitle = t(`enneatype.${type}.subtitle` as TranslationKey, locale)
  const essence = t(`enneatype.${type}.essence` as TranslationKey, locale)

  const title = `Type ${type} — ${name} · Enatipos`
  const description = `${subtitle}. ${essence}.`
  const image = `/images/enneagram/${type}.png`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      locale,
      images: [{ url: image, width: 1024, height: 1024, alt: `${type} — ${name}` }],
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
  const { id } = await params
  const type = parseEnneatypeId(id)
  if (type === null) notFound()
  return <TypeDetailView type={type} />
}

// eslint-disable-next-line import/no-default-export
export default Page
