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

import { ADJACENTS } from '../../enneatypes.constants'
import {
  type EnneatypeId,
  type RankedType,
  type ScoreMap,
} from '../../enneatypes.types'
import { type CenterWeights, type Tritype } from '../../enneatypes.utils'
import { ArrowsSection } from '../ArrowsSection'
import { EnneagramDiagram } from '../EnneagramDiagram'
import { EnneagramShareCard } from '../EnneagramShareCard'
import { TriadSection } from '../TriadSection'
import { TritypeSection } from '../TritypeSection'
import { TypeBar } from '../TypeBar'

type ResultsScreenProps = {
  topType: EnneatypeId
  wing: EnneatypeId
  ranked: RankedType[]
  scores: ScoreMap
  tritype: Tritype
  centerWeights: CenterWeights
  onRestart: () => void
}

export const ResultsScreen = ({
  topType,
  wing,
  ranked,
  scores,
  tritype,
  centerWeights,
  onRestart,
}: ResultsScreenProps) => {
  const t = useTranslate()
  const { language } = useLanguageContext()
  const { cardRef, shareAsImage, state: shareState } = useShareCard(
    `enatipos-enneagram-${topType}.png`,
  )

  const wikiPath = `/enneagram/types/${topType}?${LANGUAGE_QUERY_PARAM}=${language}`
  const top3 = ranked.slice(0, 3)
  const [adjacentA, adjacentB] = ADJACENTS[topType]
  const otherAdjacent = adjacentA === wing ? adjacentB : adjacentA

  const topName = t(`enneatype.${topType}.name` as TranslationKey)
  const topSubtitle = t(`enneatype.${topType}.subtitle` as TranslationKey)
  const topEssence = t(`enneatype.${topType}.essence` as TranslationKey)
  const topMotivation = t(`enneatype.${topType}.motivation` as TranslationKey)
  const topShadow = t(`enneatype.${topType}.shadow` as TranslationKey)
  const topGift = t(`enneatype.${topType}.gift` as TranslationKey)
  const topKeyWork = t(`enneatype.${topType}.key-work` as TranslationKey)
  const wingEssence = t(
    `enneatype.${wing}.essence` as TranslationKey,
  ).toLowerCase()

  const handleShare = useCallback(() => {
    const resultText = `${topType} — ${topName}`
    const url =
      typeof window !== 'undefined'
        ? `${window.location.origin}${wikiPath}`
        : undefined
    void shareAsImage({
      title: t('share.quiz.enneagram'),
      text: t('share.wa.text', {
        quiz: t('share.quiz.enneagram'),
        result: resultText,
      }),
      url,
    })
  }, [shareAsImage, t, topName, topType, wikiPath])

  return (
    <section className='animate-fade-in'>
      <p className='mb-4 pt-5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
        {t('results.top-type.eyebrow')}
      </p>

      <div className='mb-4 flex items-center gap-4'>
        <span className='font-display text-[clamp(96px,26vw,140px)] font-light leading-[0.85] tracking-[-0.04em] text-gold-400'>
          {topType}
        </span>
        <Image
          src={`/images/enneagram/${topType}.png`}
          alt={`${topType} — ${topName}`}
          width={1024}
          height={1024}
          priority
          className='ml-auto h-auto w-[clamp(96px,30vw,140px)]'
        />
      </div>

      <h2 className='font-display text-[clamp(22px,5.5vw,28px)] font-normal leading-[1.15] tracking-[-0.01em] text-cream-100'>
        {topName}
      </h2>
      <p className='mt-1 font-display text-base italic text-warm-gray-500'>
        {topSubtitle}
      </p>

      <p className='mb-7 text-sm tracking-[0.05em] text-warm-gray-300'>
        {t('results.wing.line', { wing, essence: wingEssence })}
      </p>

      <div className='flex justify-center pt-5 pb-8'>
        <EnneagramDiagram highlightType={topType} scores={scores} size={220} />
      </div>

      <ResultSection label={t('results.section.essence')} body={topEssence} />
      <ResultSection
        label={t('results.section.motivation')}
        body={topMotivation}
      />
      <ResultSection
        label={t('results.section.shadow')}
        body={topShadow}
        accent='rust'
      />
      <ResultSection label={t('results.section.gift')} body={topGift} />
      <ResultSection
        label={t('results.section.key-work')}
        body={topKeyWork}
        accent='gold-400'
      />

      <ArrowsSection type={topType} />

      <TriadSection weights={centerWeights} topType={topType} />

      <TritypeSection tritype={tritype} topType={topType} />

      <div className='mt-8 border-y border-oxide-900 py-5'>
        <p className='mb-2.5 font-display text-xs uppercase tracking-[0.2em] text-gold-500'>
          {t('results.wing.eyebrow', { wing })}
        </p>
        <p className='text-[15px] leading-[1.6] text-warm-gray-300'>
          {t('results.wing.description', {
            top: topType,
            wing,
            essence: wingEssence,
            other: otherAdjacent,
          })}
        </p>
      </div>

      <div className='mt-9'>
        <p className='mb-5 font-display text-[13px] uppercase tracking-[0.2em] text-gold-500'>
          {t('results.top3.eyebrow')}
        </p>
        <ul className='flex flex-col gap-4'>
          {top3.map(({ type, score }) => (
            <li key={type}>
              <TypeBar
                type={type}
                score={score}
                isTop={type === topType}
              />
            </li>
          ))}
        </ul>
      </div>

      <details className='mt-8'>
        <summary className='cursor-pointer py-2 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500 transition-colors duration-150 ease-out hover:text-cream-200'>
          {t('results.all-types.summary')}
        </summary>
        <ul className='mt-4 flex flex-col gap-2.5'>
          {ranked.map(({ type, score }) => (
            <li key={type} className='flex items-center gap-3 text-sm'>
              <span className='min-w-[18px] font-display text-warm-gray-500'>
                {type}
              </span>
              <span className='flex-1 text-warm-gray-300'>
                {t(`enneatype.${type}.name` as TranslationKey)}
              </span>
              <span className='text-xs tabular-nums text-warm-gray-500'>
                {Math.round(score * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </details>

      <div className='mt-10 flex flex-col gap-3'>
        <ShareButton onClick={handleShare} state={shareState} />

        <Link
          href={wikiPath}
          className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] border border-oxide-800 bg-transparent px-6 py-4 font-display text-[15px] tracking-[0.05em] text-gold-500
                     transition-all duration-200 ease-out
                     hover:border-gold-500 hover:bg-gold-500/5 active:scale-[0.985]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
        >
          {t('results.wiki.cta', { code: String(topType) })}
        </Link>

        <Link
          href={`/enneagram/types?${LANGUAGE_QUERY_PARAM}=${language}`}
          className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500
                     transition-colors duration-200 ease-out
                     hover:text-cream-200
                     focus-visible:text-cream-200 focus-visible:outline-none'
        >
          {t('wiki.nav.types.enneagram')}
        </Link>

        <button
          type='button'
          onClick={onRestart}
          aria-label={t('results.restart.aria-label')}
          className='w-full cursor-pointer rounded-[2px] border border-oxide-800 bg-transparent px-6 py-4 font-display text-[15px] tracking-[0.05em] text-gold-500
                     transition-all duration-200 ease-out
                     hover:border-gold-500 hover:bg-gold-500/5 active:scale-[0.985]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
        >
          {t('results.restart.button')}
        </button>

        <Link
          href='/'
          aria-label={t('results.home.aria-label')}
          className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500
                     transition-colors duration-200 ease-out
                     hover:text-cream-200
                     focus-visible:text-cream-200 focus-visible:outline-none'
        >
          <span aria-hidden='true'>←</span>
          <span>{t('results.home.button')}</span>
        </Link>
      </div>

      <p className='mt-7 text-center font-display text-xs italic leading-[1.6] text-warm-gray-700'>
        {t('results.disclaimer.line-1')}
        <br />
        {t('results.disclaimer.line-2')}
      </p>

      <EnneagramShareCard ref={cardRef} topType={topType} wing={wing} />
    </section>
  )
}
