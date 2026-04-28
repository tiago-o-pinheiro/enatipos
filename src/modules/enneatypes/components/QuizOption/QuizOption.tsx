'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'

import { type EnneatypeId } from '../../enneatypes.types'

type QuizOptionProps = {
  type: EnneatypeId
  text: string
  letter: string
  selected: boolean
  disabled: boolean
  onSelect: (type: EnneatypeId) => void
}

const BASE_CLASSES =
  'flex w-full items-start gap-3.5 rounded-[2px] border px-5 py-4.5 text-left text-base leading-[1.45] ' +
  'transition-all duration-200 ease-out ' +
  'disabled:cursor-not-allowed disabled:opacity-60 ' +
  'focus-visible:outline-none focus-visible:border-gold-500 focus-visible:ring-1 focus-visible:ring-gold-500 ' +
  'active:scale-[0.985]'

const SELECTED_CLASSES = 'border-gold-500 bg-gold-500/10 text-cream-200'
const UNSELECTED_CLASSES =
  'border-oxide-900 bg-white/[0.015] text-cream-200 hover:border-gold-500/50 hover:bg-gold-500/[0.08] hover:translate-x-0.5'

export const QuizOption = ({
  type,
  text,
  letter,
  selected,
  disabled,
  onSelect,
}: QuizOptionProps) => {
  const t = useTranslate()

  const handleClick = () => onSelect(type)

  return (
    <button
      type='button'
      onClick={handleClick}
      disabled={disabled}
      aria-label={t('quiz.option.aria-label', { letter, text })}
      aria-pressed={selected}
      className={`${BASE_CLASSES} ${selected ? SELECTED_CLASSES : UNSELECTED_CLASSES}`}
    >
      <span
        className={`min-w-[18px] pt-[3px] font-display text-[13px] font-medium tracking-[0.1em] ${
          selected ? 'text-gold-400' : 'text-warm-gray-700'
        }`}
      >
        {letter}
      </span>
      <span className='flex-1'>{text}</span>
    </button>
  )
}
