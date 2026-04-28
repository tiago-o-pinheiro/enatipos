'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'

type QuizOptionProps = {
  choice: 'a' | 'b'
  letter: string
  text: string
  selected: boolean
  disabled: boolean
  onSelect: (choice: 'a' | 'b') => void
}

const BASE_CLASSES =
  'group flex w-full items-start gap-4 rounded-[2px] border px-5 py-5 text-left ' +
  'transition-all duration-200 ease-out ' +
  'disabled:cursor-not-allowed disabled:opacity-60 ' +
  'focus-visible:outline-none focus-visible:border-gold-500 focus-visible:ring-1 focus-visible:ring-gold-500 ' +
  'active:scale-[0.985]'

const SELECTED_CLASSES = 'border-gold-500 bg-gold-500/10 text-cream-100'
const UNSELECTED_CLASSES =
  'border-oxide-900 bg-white/[0.015] text-cream-200 hover:border-gold-500/50 hover:bg-gold-500/[0.08] hover:translate-x-0.5'

export const QuizOption = ({
  choice,
  letter,
  text,
  selected,
  disabled,
  onSelect,
}: QuizOptionProps) => {
  const t = useTranslate()

  const handleClick = () => onSelect(choice)

  return (
    <button
      type='button'
      onClick={handleClick}
      disabled={disabled}
      aria-label={t('mbti.quiz.option.aria-label', { letter, text })}
      aria-pressed={selected}
      className={`${BASE_CLASSES} ${selected ? SELECTED_CLASSES : UNSELECTED_CLASSES}`}
    >
      <span
        className={`font-display text-[clamp(26px,5.5vw,32px)] font-light leading-none tracking-[-0.02em] ${
          selected ? 'text-gold-400' : 'text-warm-gray-600 group-hover:text-gold-500/60'
        }`}
      >
        {letter}
      </span>
      <span className='flex-1 self-center text-[15px] leading-[1.55]'>
        {text}
      </span>
    </button>
  )
}
