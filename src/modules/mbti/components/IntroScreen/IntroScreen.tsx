'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'

type IntroScreenProps = {
  onStart: () => void
}

export const IntroScreen = ({ onStart }: IntroScreenProps) => {
  const t = useTranslate()

  return (
    <section className='animate-fade-in pt-6'>
      <p className='mb-4.5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
        {t('mbti.intro.eyebrow')}
      </p>

      <h1 className='mb-2 font-display text-[clamp(44px,11vw,64px)] font-normal leading-[0.95] tracking-[-0.02em] text-cream-100'>
        {t('mbti.intro.title')}
      </h1>

      <p className='mb-8 font-display text-xl italic tracking-[-0.01em] text-gold-500'>
        {t('mbti.intro.subtitle')}
      </p>

      <div className='my-7 flex justify-center'>
        <AxesGlyph />
      </div>

      <p className='mb-4.5 text-base leading-[1.65] text-warm-gray-300'>
        {t('mbti.intro.body.1.before')}
        <em className='text-gold-400'>{t('mbti.intro.body.1.em')}</em>
        {t('mbti.intro.body.1.after')}
      </p>

      <p className='mb-9 text-[15px] leading-[1.65] text-warm-gray-500'>
        {t('mbti.intro.body.2.before')}
        <em>{t('mbti.intro.body.2.em')}</em>
        {t('mbti.intro.body.2.after')}
      </p>

      <button
        type='button'
        onClick={onStart}
        aria-label={t('mbti.intro.start.aria-label')}
        className='w-full cursor-pointer rounded-[2px] bg-gold-400 px-6 py-4.5 font-display text-lg font-medium tracking-[0.02em] text-ink-800
                   transition-all duration-200 ease-out
                   hover:bg-gold-400/90 active:scale-[0.985]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900
                   disabled:cursor-not-allowed disabled:opacity-60'
      >
        {t('mbti.intro.start.button')}
      </button>

      <p className='mt-7 border-t border-oxide-900 pt-5 text-center text-xs uppercase tracking-[0.1em] text-warm-gray-700'>
        {t('mbti.intro.duration')}
      </p>
    </section>
  )
}

// Minimalist editorial glyph: four slender axes arranged in a cross.
const AxesGlyph = () => (
  <svg
    width='200'
    height='200'
    viewBox='0 0 200 200'
    fill='none'
    aria-hidden='true'
    className='text-gold-500/70'
  >
    {/* Outer circle */}
    <circle cx='100' cy='100' r='78' stroke='currentColor' strokeWidth='0.75' opacity='0.5' />
    {/* Inner circle */}
    <circle cx='100' cy='100' r='22' stroke='currentColor' strokeWidth='0.75' opacity='0.8' />
    {/* Four axes */}
    <line x1='100' y1='22' x2='100' y2='178' stroke='currentColor' strokeWidth='0.75' />
    <line x1='22' y1='100' x2='178' y2='100' stroke='currentColor' strokeWidth='0.75' />
    <line x1='44.85' y1='44.85' x2='155.15' y2='155.15' stroke='currentColor' strokeWidth='0.5' opacity='0.6' />
    <line x1='155.15' y1='44.85' x2='44.85' y2='155.15' stroke='currentColor' strokeWidth='0.5' opacity='0.6' />
    {/* Axis letters */}
    <text x='100' y='15' textAnchor='middle' className='fill-cream-200 font-display' fontSize='11' letterSpacing='0.2em'>E</text>
    <text x='100' y='192' textAnchor='middle' className='fill-cream-200 font-display' fontSize='11' letterSpacing='0.2em'>I</text>
    <text x='12' y='104' textAnchor='middle' className='fill-cream-200 font-display' fontSize='11' letterSpacing='0.2em'>N</text>
    <text x='189' y='104' textAnchor='middle' className='fill-cream-200 font-display' fontSize='11' letterSpacing='0.2em'>S</text>
    <text x='38' y='40' textAnchor='middle' className='fill-warm-gray-600 font-display' fontSize='9' letterSpacing='0.2em'>T</text>
    <text x='162' y='164' textAnchor='middle' className='fill-warm-gray-600 font-display' fontSize='9' letterSpacing='0.2em'>P</text>
    <text x='162' y='40' textAnchor='middle' className='fill-warm-gray-600 font-display' fontSize='9' letterSpacing='0.2em'>F</text>
    <text x='38' y='164' textAnchor='middle' className='fill-warm-gray-600 font-display' fontSize='9' letterSpacing='0.2em'>J</text>
  </svg>
)
