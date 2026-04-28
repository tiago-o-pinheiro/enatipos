'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'

import { LANGUAGE_QUERY_PARAM } from '@/modules/languages/languages.constants'
import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { useLanguageContext } from '@/modules/languages/stores/language-store'
import { ResultSection } from '@/modules/shared/components/ResultSection'
import { ShareButton } from '@/modules/shared/components/ShareButton'
import { useShareCard } from '@/modules/shared/hooks/use-share-card'
import { type TranslationKey } from '@/translations/translation.types'

import { AXES, type MbtiResult } from '../../mbti.types'
import { AxisBar } from '../AxisBar'
import { MbtiShareCard } from '../MbtiShareCard'

type ResultsScreenProps = {
  result: MbtiResult
  onRestart: () => void
}

export const ResultsScreen = ({ result, onRestart }: ResultsScreenProps) => {
  const t = useTranslate()
  const { language } = useLanguageContext()
  const { code, strengths } = result
  const { cardRef, shareAsImage, state: shareState } = useShareCard(
    `enatipos-mbti-${code}.png`,
  )

  const name = t(`mbti.type.${code}.name` as TranslationKey)
  const subtitle = t(`mbti.type.${code}.subtitle` as TranslationKey)
  const essence = t(`mbti.type.${code}.essence` as TranslationKey)
  const motivation = t(`mbti.type.${code}.motivation` as TranslationKey)
  const shadow = t(`mbti.type.${code}.shadow` as TranslationKey)
  const gift = t(`mbti.type.${code}.gift` as TranslationKey)
  const keyWork = t(`mbti.type.${code}.key-work` as TranslationKey)

  const wikiPath = `/mbti/types/${code}?${LANGUAGE_QUERY_PARAM}=${language}`

  const handleShare = useCallback(() => {
    const resultText = `${code} — ${name}`
    const url =
      typeof window !== 'undefined'
        ? `${window.location.origin}${wikiPath}`
        : undefined
    void shareAsImage({
      title: t('share.quiz.mbti'),
      text: t('share.wa.text', {
        quiz: t('share.quiz.mbti'),
        result: resultText,
      }),
      url,
    })
  }, [shareAsImage, t, code, name, wikiPath])

  return (
    <section className='animate-fade-in'>
      <p className='mb-4 pt-5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
        {t('mbti.results.eyebrow')}
      </p>

      <div className='mb-4 flex items-center gap-4'>
        <span className='font-display text-[clamp(56px,18vw,96px)] font-light leading-[0.85] tracking-[-0.05em] text-gold-400'>
          {code}
        </span>
        <Image
          src={`/images/mbti/${code}.png`}
          alt={`${code} — ${name}`}
          width={1254}
          height={1254}
          priority
          className='ml-auto h-auto w-[clamp(96px,30vw,140px)]'
        />
      </div>

      <h2 className='mb-1 font-display text-[clamp(22px,5.5vw,28px)] font-normal leading-[1.15] tracking-[-0.01em] text-cream-100'>
        {name}
      </h2>
      <p className='mb-8 font-display text-base italic text-warm-gray-500'>
        {subtitle}
      </p>

      <ResultSection label={t('mbti.results.eyebrow')} body={essence} />
      <ResultSection
        label={t('results.section.motivation')}
        body={motivation}
      />
      <ResultSection
        label={t('results.section.shadow')}
        body={shadow}
        accent='rust'
      />
      <ResultSection label={t('results.section.gift')} body={gift} />
      <ResultSection
        label={t('results.section.key-work')}
        body={keyWork}
        accent='gold-400'
      />

      <div className='mt-10 border-t border-oxide-900 pt-8'>
        <p className='mb-5 font-display text-[13px] uppercase tracking-[0.2em] text-gold-500'>
          {t('mbti.results.axes.eyebrow')}
        </p>
        <div>
          {AXES.map((axis) => (
            <AxisBar
              key={axis}
              axis={axis}
              winningSide={strengths[axis].side}
              percent={strengths[axis].percent}
            />
          ))}
        </div>
      </div>

      <div className='mt-10 flex flex-col gap-3'>
        <ShareButton onClick={handleShare} state={shareState} />

        <Link
          href={wikiPath}
          className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] border border-oxide-800 bg-transparent px-6 py-4 font-display text-[15px] tracking-[0.05em] text-gold-500
                     transition-all duration-200 ease-out
                     hover:border-gold-500 hover:bg-gold-500/5 active:scale-[0.985]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
        >
          {t('results.wiki.cta', { code })}
        </Link>

        <Link
          href={`/mbti/types?${LANGUAGE_QUERY_PARAM}=${language}`}
          className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500
                     transition-colors duration-200 ease-out
                     hover:text-cream-200
                     focus-visible:text-cream-200 focus-visible:outline-none'
        >
          {t('wiki.nav.types.mbti')}
        </Link>

        <button
          type='button'
          onClick={onRestart}
          aria-label={t('mbti.results.restart.aria-label')}
          className='w-full cursor-pointer rounded-[2px] border border-oxide-800 bg-transparent px-6 py-4 font-display text-[15px] tracking-[0.05em] text-gold-500
                     transition-all duration-200 ease-out
                     hover:border-gold-500 hover:bg-gold-500/5 active:scale-[0.985]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
        >
          {t('mbti.results.restart.button')}
        </button>

        <Link
          href='/'
          aria-label={t('mbti.results.home.aria-label')}
          className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500
                     transition-colors duration-200 ease-out
                     hover:text-cream-200
                     focus-visible:text-cream-200 focus-visible:outline-none'
        >
          <span aria-hidden='true'>←</span>
          <span>{t('mbti.results.home.button')}</span>
        </Link>
      </div>

      <p className='mt-7 text-center font-display text-xs italic leading-[1.6] text-warm-gray-700'>
        {t('mbti.results.disclaimer.line-1')}
        <br />
        {t('mbti.results.disclaimer.line-2')}
      </p>

      <MbtiShareCard ref={cardRef} result={result} />
    </section>
  )
}
