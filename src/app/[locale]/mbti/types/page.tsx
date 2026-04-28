import { type Metadata } from 'next'

import { translate } from '@/modules/languages/services/translator'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { TypesIndexView } from '@/modules/mbti/views/types-index'

type Params = { locale: string }
type PageProps = { params: Promise<Params> }

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale } = await params
  if (!isLanguage(locale)) return {}

  const title = `${translate('wiki.mbti.index.title', locale)} · Enatipos`
  const description = translate('wiki.mbti.index.subtitle', locale)

  return {
    title,
    description,
    openGraph: { title, description, type: 'website', locale },
    twitter: { card: 'summary_large_image', title, description },
  }
}

// eslint-disable-next-line import/no-default-export
export default TypesIndexView
