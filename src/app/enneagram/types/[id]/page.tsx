import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { TypeDetailView } from '@/modules/enneatypes/views/type-detail'
import {
  ENNEATYPE_IDS,
  type EnneatypeId,
} from '@/modules/enneatypes/enneatypes.types'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_QUERY_PARAM,
} from '@/modules/languages/languages.constants'
import { type Language } from '@/modules/languages/languages.types'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { translations } from '@/translations'
import { type TranslationKey } from '@/translations/translation.types'

type Params = { id: string }
type SearchParams = Record<string, string | string[] | undefined>
type PageProps = {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}

const parseEnneatypeId = (value: string): EnneatypeId | null => {
  const n = Number.parseInt(value, 10)
  return (ENNEATYPE_IDS as readonly number[]).includes(n)
    ? (n as EnneatypeId)
    : null
}

const resolveLanguage = (sp: SearchParams): Language => {
  const raw = sp[LANGUAGE_QUERY_PARAM]
  const value = Array.isArray(raw) ? raw[0] : raw
  return isLanguage(value) ? value : DEFAULT_LANGUAGE
}

const t = (key: TranslationKey, language: Language): string =>
  translations[language][key] ?? translations[DEFAULT_LANGUAGE][key] ?? key

export const generateStaticParams = (): Params[] =>
  ENNEATYPE_IDS.map((id) => ({ id: String(id) }))

export const generateMetadata = async ({
  params,
  searchParams,
}: PageProps): Promise<Metadata> => {
  const { id } = await params
  const type = parseEnneatypeId(id)
  if (type === null) return {}

  const language = resolveLanguage(await searchParams)
  const name = t(`enneatype.${type}.name` as TranslationKey, language)
  const subtitle = t(`enneatype.${type}.subtitle` as TranslationKey, language)
  const essence = t(`enneatype.${type}.essence` as TranslationKey, language)

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
