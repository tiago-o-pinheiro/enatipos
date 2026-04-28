import { type Metadata } from 'next'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import { type ReactNode } from 'react'

import { LanguageSwitcher } from '@/modules/languages/components/LanguageSwitcher'
import { LANGUAGES } from '@/modules/languages/languages.constants'
import { translate } from '@/modules/languages/services/translator'
import { LanguageProvider } from '@/modules/languages/stores/language-store'
import { isLanguage } from '@/modules/languages/stores/language-store/utils'
import { withLocale } from '@/modules/languages/utils/locale-path'

import '../globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3050'

type LayoutParams = { locale: string }
type LayoutProps = {
  children: ReactNode
  params: Promise<LayoutParams>
}

export const generateStaticParams = (): LayoutParams[] =>
  LANGUAGES.map((locale) => ({ locale }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<LayoutParams>
}): Promise<Metadata> => {
  const { locale } = await params
  if (!isLanguage(locale)) return {}

  const title = translate('meta.title', locale)
  const description = translate('meta.description', locale)

  const languages = Object.fromEntries(
    LANGUAGES.map((l) => [l, withLocale('/', l)]),
  )

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: withLocale('/', locale),
      languages,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      url: withLocale('/', locale),
      siteName: 'Enatipos',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

const RootLayout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params
  if (!isLanguage(locale)) notFound()

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <body className='min-h-screen bg-page font-sans text-cream-200 antialiased'>
        <LanguageProvider language={locale}>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

// eslint-disable-next-line import/no-default-export
export default RootLayout
