import { type Metadata } from 'next'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import { type PropsWithChildren } from 'react'

import { LanguageSwitcher } from '@/modules/languages/components/LanguageSwitcher'
import { LanguageProvider } from '@/modules/languages/stores/language-store'

import './globals.css'

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Enatipos — Know yourself',
  description:
    'Two doors into your interior: the Enneagram (why you move) and Jung / MBTI (how you think). Elegant, serious, shareable.',
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html
    lang='en'
    className={`${fraunces.variable} ${instrumentSans.variable}`}
    suppressHydrationWarning
  >
    <body className='min-h-screen bg-page font-sans text-cream-200 antialiased'>
      <LanguageProvider>
        <LanguageSwitcher />
        {children}
      </LanguageProvider>
    </body>
  </html>
)

// eslint-disable-next-line import/no-default-export
export default RootLayout
