'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import { type EnneatypeId } from '../../enneatypes.types'

type TypeBarProps = {
  type: EnneatypeId
  score: number
  isTop: boolean
}

export const TypeBar = ({ type, score, isTop }: TypeBarProps) => {
  const t = useTranslate()
  const pct = Math.round(score * 100)
  const name = t(`enneatype.${type}.name` as TranslationKey)

  return (
    <div>
      <div className='mb-1.5 flex items-baseline justify-between'>
        <div className='flex items-baseline gap-2.5'>
          <span
            className={`font-display text-[22px] font-normal ${
              isTop ? 'text-gold-400' : 'text-warm-gray-500'
            }`}
          >
            {type}
          </span>
          <span className='text-sm text-warm-gray-300'>{name}</span>
        </div>
        <span
          className={`font-display text-[15px] tabular-nums ${
            isTop ? 'text-gold-400' : 'text-warm-gray-500'
          }`}
        >
          {pct}%
        </span>
      </div>
      <div
        role='progressbar'
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={t('results.type-bar.aria-label', { type })}
        className='h-0.5 overflow-hidden bg-ink-800'
      >
        <div
          className={`h-full transition-[width] duration-1000 ease-out ${
            isTop ? 'bg-gold-400' : 'bg-warm-gray-600'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
