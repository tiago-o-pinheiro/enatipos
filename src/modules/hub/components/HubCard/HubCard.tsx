'use client'

import Link from 'next/link'

import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

type HubCardProps = {
  href: string
  eyebrowKey: TranslationKey
  titleKey: TranslationKey
  subtitleKey: TranslationKey
  pitchKey: TranslationKey
  ctaKey: TranslationKey
  ariaLabelKey: TranslationKey
}

export const HubCard = ({
  href,
  eyebrowKey,
  titleKey,
  subtitleKey,
  pitchKey,
  ctaKey,
  ariaLabelKey,
}: HubCardProps) => {
  const t = useTranslate()

  return (
    <Link
      href={href}
      aria-label={t(ariaLabelKey)}
      className='group relative flex flex-col gap-5 rounded-[2px] border border-oxide-800 bg-ink-800/60 px-7 py-8 pb-7
                 transition-all duration-250 ease-out
                 hover:-translate-y-0.5 hover:border-gold-500/60 hover:bg-ink-800/80
                 focus-visible:outline-none focus-visible:border-gold-500 focus-visible:ring-1 focus-visible:ring-gold-500'
    >
      <p className='font-display text-[11px] font-medium uppercase tracking-[0.25em] text-gold-500'>
        {t(eyebrowKey)}
      </p>

      <div>
        <h2 className='mb-1 font-display text-[clamp(32px,8vw,48px)] font-normal leading-[0.95] tracking-[-0.03em] text-cream-100 transition-colors duration-250 group-hover:text-gold-400'>
          {t(titleKey)}
        </h2>
        <p className='font-display text-xl italic tracking-[-0.01em] text-gold-500/90'>
          {t(subtitleKey)}
        </p>
      </div>

      <p className='text-[15px] leading-[1.6] text-warm-gray-300'>
        {t(pitchKey)}
      </p>

      <p
        className='mt-2 font-display text-[13px] uppercase tracking-[0.2em] text-gold-500 transition-transform duration-250 group-hover:translate-x-1'
        aria-hidden='true'
      >
        {t(ctaKey)}
      </p>
    </Link>
  )
}
