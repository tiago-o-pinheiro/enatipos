'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import { type Axis, type AxisSide } from '../../mbti.types'

type AxisBarProps = {
  axis: Axis
  winningSide: AxisSide
  percent: number // 0-100 — strength of the winning side
}

export const AxisBar = ({ axis, winningSide, percent }: AxisBarProps) => {
  const t = useTranslate()

  const labelKey = `mbti.axis.${axis}.label` as TranslationKey
  const letterAKey = `mbti.axis.${axis}.letter.a` as TranslationKey
  const letterBKey = `mbti.axis.${axis}.letter.b` as TranslationKey
  const wordAKey = `mbti.axis.${axis}.word.a` as TranslationKey
  const wordBKey = `mbti.axis.${axis}.word.b` as TranslationKey

  const letterA = t(letterAKey)
  const letterB = t(letterBKey)
  const wordA = t(wordAKey)
  const wordB = t(wordBKey)

  const winsA = winningSide === letterA
  // Position of the marker on the bar (0% = far left/A, 100% = far right/B).
  // The `percent` value is the winning side's strength.
  const markerPercent = winsA ? 50 - (percent - 50) : 50 + (percent - 50)
  const label = t(labelKey)
  const winningWord = winsA ? wordA : wordB

  return (
    <div className='mt-7 first:mt-0'>
      <div className='mb-2.5 flex items-baseline justify-between'>
        <p className='font-display text-xs font-medium uppercase tracking-[0.2em] text-gold-500'>
          {label}
        </p>
        <p className='font-display text-xs uppercase tracking-[0.2em] text-warm-gray-500'>
          <span className='text-cream-200'>{winningWord}</span>
          <span className='text-warm-gray-700'> · {percent}%</span>
        </p>
      </div>
      <div className='relative h-px bg-oxide-800'>
        <div
          className='absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gold-400 ring-2 ring-ink-900 transition-[left] duration-500 ease-out'
          style={{ left: `calc(${markerPercent}% - 4px)` }}
          aria-hidden='true'
        />
      </div>
      <div className='mt-2 flex items-center justify-between font-display text-[13px] tracking-[0.15em]'>
        <span className={winsA ? 'text-cream-200' : 'text-warm-gray-600'}>
          <span className='mr-1.5 font-medium'>{letterA}</span>
          <span className='text-xs uppercase tracking-[0.2em] text-warm-gray-600'>
            {wordA}
          </span>
        </span>
        <span className={winsA ? 'text-warm-gray-600' : 'text-cream-200'}>
          <span className='text-xs uppercase tracking-[0.2em] text-warm-gray-600'>
            {wordB}
          </span>
          <span className='ml-1.5 font-medium'>{letterB}</span>
        </span>
      </div>
    </div>
  )
}
