import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { type EnneatypeId } from '@/modules/enneatypes/enneatypes.types'
import {
  COMPAT_PAIRS,
  compatPairSlug,
  parseCompatPair,
} from '@/modules/enneatypes/enneatypes.utils'
import { CompatibilityView } from '@/modules/enneatypes/views/compatibility'
import { type Language } from '@/modules/languages/languages.types'
import { translate } from '@/modules/languages/services/translator'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { withLocale } from '@/modules/languages/utils/locale-path'

type Params = { locale: string; pair: string }
type PageProps = {
  params: Promise<Params>
}

export const generateStaticParams = (): { pair: string }[] =>
  COMPAT_PAIRS.map(([a, b]) => ({ pair: compatPairSlug(a, b) }))

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, pair } = await params
  if (!isLanguage(locale)) return {}
  const parsed = parseCompatPair(pair)
  if (!parsed) return {}
  const [a, b] = parsed

  const aName = translate(`enneatype.${a}.name` as never, locale)
  const bName = translate(`enneatype.${b}.name` as never, locale)

  const title = `${a} × ${b} — ${translate('compatibility.title', locale)} · Enatipos`
  const description = translate('compatibility.metadata.description', locale, {
    a,
    b,
    aName,
    bName,
  })
  const image = `/images/enneagram/${a}.png`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      locale,
      images: [{ url: image, width: 1024, height: 1024, alt: `${a} × ${b}` }],
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
  const { locale, pair } = await params
  const parsed = parseCompatPair(pair)
  if (!parsed) notFound()
  const [a, b] = parsed as readonly [EnneatypeId, EnneatypeId]
  const canonical = compatPairSlug(a, b)
  if (canonical !== pair) {
    redirect(withLocale(`/enneagram/compatibility/${canonical}`, locale as Language))
  }
  return <CompatibilityView a={a} b={b} />
}

// eslint-disable-next-line import/no-default-export
export default Page
