'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'

type QuizProgressProps = {
  currentIndex: number
  total: number
  progress: number
  onBack: () => void
}

export const QuizProgress = ({
  currentIndex,
  total,
  progress,
  onBack,
}: QuizProgressProps) => {
  const t = useTranslate()

  return (
    <div className='mb-9'>
      <div className='mb-2.5 flex items-center justify-between text-xs font-medium uppercase tracking-[0.15em] text-warm-gray-500'>
        <span>
          <span className='text-gold-400'>
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className='text-oxide-700'> / {total}</span>
        </span>
        {currentIndex > 0 && (
          <button
            type='button'
            onClick={onBack}
            aria-label={t('quiz.back.aria-label')}
            className='cursor-pointer py-1 text-xs uppercase tracking-[0.15em] text-warm-gray-500 transition-colors duration-150 ease-out hover:text-cream-200 focus-visible:text-cream-200 focus-visible:outline-none'
          >
            {t('quiz.back.button')}
          </button>
        )}
      </div>
      <div
        role='progressbar'
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={t('quiz.progress.aria-label')}
        className='relative h-px overflow-hidden bg-oxide-900'
      >
        <div
          className='h-full bg-gold-500 transition-[width] duration-[400ms] ease-out'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
