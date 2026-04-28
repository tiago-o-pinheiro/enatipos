import { type Metadata } from 'next'

import { translate } from '@/modules/languages/services/translator'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { HomeView } from '@/modules/mbti/views/home/Home.view'

type Params = { locale: string }
type PageProps = { params: Promise<Params> }

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale } = await params
  if (!isLanguage(locale)) return {}

  const title = `${translate('mbti.intro.title', locale)} — ${translate('mbti.intro.subtitle', locale)} · Enatipos`
  const description = translate('meta.description', locale)

  return {
    title,
    description,
    openGraph: { title, description, type: 'website', locale },
    twitter: { card: 'summary_large_image', title, description },
  }
}

// eslint-disable-next-line import/no-default-export
export default HomeView
