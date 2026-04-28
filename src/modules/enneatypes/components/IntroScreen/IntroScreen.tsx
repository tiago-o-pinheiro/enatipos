'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'

import { EnneagramDiagram } from '../EnneagramDiagram'

type IntroScreenProps = {
  onStart: () => void
}

export const IntroScreen = ({ onStart }: IntroScreenProps) => {
  const t = useTranslate()

  return (
    <section className='animate-fade-in pt-6'>
      <p className='mb-4.5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
        {t('intro.eyebrow')}
      </p>

      <h1 className='mb-2 font-display text-[clamp(44px,11vw,64px)] font-normal leading-[0.95] tracking-[-0.02em] text-cream-100'>
        {t('intro.title')}
      </h1>

      <p className='mb-8 font-display text-xl italic tracking-[-0.01em] text-gold-500'>
        {t('intro.subtitle')}
      </p>

      <div className='my-5 flex justify-center'>
        <EnneagramDiagram size={220} />
      </div>

      <p className='mb-4.5 text-base leading-[1.65] text-warm-gray-300'>
        {t('intro.body.1.before')}
        <em className='text-gold-400'>{t('intro.body.1.em')}</em>
        {t('intro.body.1.after')}
      </p>

      <p className='mb-9 text-[15px] leading-[1.65] text-warm-gray-500'>
        {t('intro.body.2.before')}
        <em>{t('intro.body.2.em')}</em>
        {t('intro.body.2.after')}
      </p>

      <button
        type='button'
        onClick={onStart}
        aria-label={t('intro.start.aria-label')}
        className='w-full cursor-pointer rounded-[2px] bg-gold-400 px-6 py-4.5 font-display text-lg font-medium tracking-[0.02em] text-ink-800
                   transition-all duration-200 ease-out
                   hover:bg-gold-400/90 active:scale-[0.985]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900
                   disabled:cursor-not-allowed disabled:opacity-60'
      >
        {t('intro.start.button')}
      </button>

      <p className='mt-7 border-t border-oxide-900 pt-5 text-center text-xs uppercase tracking-[0.1em] text-warm-gray-700'>
        {t('intro.duration')}
      </p>
    </section>
  )
}
