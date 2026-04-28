import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_QUERY_PARAM,
} from '@/modules/languages/languages.constants'
import { type Language } from '@/modules/languages/languages.types'
import { translate } from '@/modules/languages/services/translator'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { type MbtiType } from '@/modules/mbti/mbti.types'
import {
  COMPAT_PAIRS,
  compatPairSlug,
  parseCompatPair,
} from '@/modules/mbti/mbti.utils'
import { CompatibilityView } from '@/modules/mbti/views/compatibility'

type Params = { pair: string }
type SearchParams = Record<string, string | string[] | undefined>
type PageProps = {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}

const resolveLanguage = (sp: SearchParams): Language => {
  const raw = sp[LANGUAGE_QUERY_PARAM]
  const value = Array.isArray(raw) ? raw[0] : raw
  return isLanguage(value) ? value : DEFAULT_LANGUAGE
}

export const generateStaticParams = (): Params[] =>
  COMPAT_PAIRS.map(([a, b]) => ({ pair: compatPairSlug(a, b) }))

export const generateMetadata = async ({
  params,
  searchParams,
}: PageProps): Promise<Metadata> => {
  const { pair } = await params
  const parsed = parseCompatPair(pair)
  if (!parsed) return {}
  const [a, b] = parsed

  const language = resolveLanguage(await searchParams)
  const aName = translate(`mbti.type.${a}.name` as never, language)
  const bName = translate(`mbti.type.${b}.name` as never, language)

  const title = `${a} × ${b} — ${translate('compatibility.title', language)} · Enatipos`
  const description = translate('compatibility.metadata.description', language, {
    a,
    b,
    aName,
    bName,
  })
  const image = `/images/mbti/${a}.png`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [{ url: image, width: 1254, height: 1254, alt: `${a} × ${b}` }],
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
  const { pair } = await params
  const parsed = parseCompatPair(pair)
  if (!parsed) notFound()
  const [a, b] = parsed as readonly [MbtiType, MbtiType]
  const canonical = compatPairSlug(a, b)
  if (canonical !== pair) redirect(`/mbti/compatibility/${canonical}`)
  return <CompatibilityView a={a} b={b} />
}

// eslint-disable-next-line import/no-default-export
export default Page
