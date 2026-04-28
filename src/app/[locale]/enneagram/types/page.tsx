import { type Metadata } from 'next'

import { TypesIndexView } from '@/modules/enneatypes/views/types-index'
import { translate } from '@/modules/languages/services/translator'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'

type Params = { locale: string }
type PageProps = { params: Promise<Params> }

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale } = await params
  if (!isLanguage(locale)) return {}

  const title = `${translate('wiki.enneagram.index.title', locale)} · Enatipos`
  const description = translate('wiki.enneagram.index.subtitle', locale)

  return {
    title,
    description,
    openGraph: { title, description, type: 'website', locale },
    twitter: { card: 'summary_large_image', title, description },
  }
}

// eslint-disable-next-line import/no-default-export
export default TypesIndexView
