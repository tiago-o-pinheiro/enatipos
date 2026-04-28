'use client'

import Link from 'next/link'

import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { useLocaleHref } from '@/modules/languages/hooks/use-locale-href'

import { HubCard } from '../../components/HubCard'

export const HomeView = () => {
  const t = useTranslate()
  const localeHref = useLocaleHref()

  return (
    <main className='mx-auto max-w-xl px-5 pt-10 pb-10'>
      <section className='animate-fade-in'>
        <h1 className='font-display text-[clamp(44px,11vw,64px)] font-normal leading-[0.95] tracking-[-0.03em] text-cream-100'>
          {t('hub.title')}
        </h1>

        <p className='mt-2 font-display text-xl italic tracking-[-0.01em] text-gold-500'>
          {t('hub.subtitle')}
        </p>

        <p className='mt-6 text-base leading-[1.65] text-warm-gray-300'>
          {t('hub.body')}
        </p>

        <div className='mt-10 flex flex-col gap-5'>
          <HubCard
            href={localeHref('/enneagram')}
            eyebrowKey='hub.card.enneagram.eyebrow'
            titleKey='hub.card.enneagram.title'
            subtitleKey='hub.card.enneagram.subtitle'
            pitchKey='hub.card.enneagram.pitch'
            ctaKey='hub.card.enneagram.cta'
            ariaLabelKey='hub.card.enneagram.aria-label'
          />
          <HubCard
            href={localeHref('/mbti')}
            eyebrowKey='hub.card.mbti.eyebrow'
            titleKey='hub.card.mbti.title'
            subtitleKey='hub.card.mbti.subtitle'
            pitchKey='hub.card.mbti.pitch'
            ctaKey='hub.card.mbti.cta'
            ariaLabelKey='hub.card.mbti.aria-label'
          />
        </div>

        <nav
          aria-label={t('hub.wiki.aria-label')}
          className='mt-10 flex flex-col items-center gap-2 text-center'
        >
          <p className='font-display text-[11px] font-medium uppercase tracking-[0.25em] text-warm-gray-500'>
            {t('hub.wiki.eyebrow')}
          </p>
          <p className='text-[13px] leading-[1.6] text-warm-gray-300'>
            <Link
              href={localeHref('/enneagram/types')}
              className='text-gold-500 underline-offset-4 transition-colors duration-250 hover:text-gold-400 hover:underline focus-visible:outline-none focus-visible:underline'
            >
              {t('hub.wiki.enneagram')}
            </Link>
            <span className='mx-2 text-warm-gray-700' aria-hidden='true'>·</span>
            <Link
              href={localeHref('/mbti/types')}
              className='text-gold-500 underline-offset-4 transition-colors duration-250 hover:text-gold-400 hover:underline focus-visible:outline-none focus-visible:underline'
            >
              {t('hub.wiki.mbti')}
            </Link>
          </p>
        </nav>

        <p className='mt-10 border-t border-oxide-900 pt-6 text-center font-display text-xs italic leading-[1.6] text-warm-gray-700'>
          {t('hub.footnote')}
        </p>
      </section>
    </main>
  )
}
