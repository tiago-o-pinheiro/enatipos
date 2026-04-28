'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import { CENTERS, CENTER_OF, type Center } from '../../enneatypes.constants'
import { type EnneatypeId } from '../../enneatypes.types'
import { type CenterWeights } from '../../enneatypes.utils'

type TriadSectionProps = {
  weights: CenterWeights
  topType: EnneatypeId
}

// The rendered order is gut → heart → head so the bar reads bottom-up
// (body, feeling, mind) — the classic Enneagram center order.
const DISPLAY_ORDER: readonly Center[] = CENTERS

export const TriadSection = ({ weights, topType }: TriadSectionProps) => {
  const t = useTranslate()
  const primaryCenter = CENTER_OF[topType]

  const percentFor = (center: Center) => Math.round(weights[center] * 100)

  return (
    <section className='mt-10 border-t border-oxide-900 pt-8'>
      <p className='mb-3 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
        {t('results.triad.eyebrow')}
      </p>

      <p className='mb-5 text-[15px] leading-[1.6] text-warm-gray-300'>
        {t('results.triad.description')}
      </p>

      <div
        role='img'
        aria-label={t('results.triad.aria-label', {
          gut: percentFor('gut'),
          heart: percentFor('heart'),
          head: percentFor('head'),
        })}
        className='flex h-2 overflow-hidden bg-ink-800'
      >
        {DISPLAY_ORDER.map((center) => {
          const isPrimary = center === primaryCenter
          return (
            <div
              key={center}
              className={`h-full transition-[width] duration-1000 ease-out ${
                isPrimary ? 'bg-gold-400' : 'bg-warm-gray-600'
              }`}
              style={{ width: `${weights[center] * 100}%` }}
            />
          )
        })}
      </div>

      <ul className='mt-3 grid grid-cols-3 gap-3'>
        {DISPLAY_ORDER.map((center) => {
          const isPrimary = center === primaryCenter
          const pct = percentFor(center)
          const label = t(`enneatype.center.${center}` as TranslationKey)
          return (
            <li key={center} className='flex flex-col'>
              <span
                className={`font-display text-[11px] uppercase tracking-[0.2em] ${
                  isPrimary ? 'text-gold-500' : 'text-warm-gray-500'
                }`}
              >
                {label}
              </span>
              <span
                className={`font-display text-lg tabular-nums ${
                  isPrimary ? 'text-gold-400' : 'text-warm-gray-500'
                }`}
              >
                {pct}%
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
