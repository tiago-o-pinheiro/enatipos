'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import {
  type EnneatypeId,
  type QuizQuestion,
} from '../../enneatypes.types'
import { QuizOption } from '../QuizOption'
import { QuizProgress } from '../QuizProgress'

type QuizScreenProps = {
  question: QuizQuestion
  currentIndex: number
  total: number
  fading: boolean
  selectedAnswer?: EnneatypeId
  onAnswer: (type: EnneatypeId) => void
  onBack: () => void
}

export const QuizScreen = ({
  question,
  currentIndex,
  total,
  fading,
  selectedAnswer,
  onAnswer,
  onBack,
}: QuizScreenProps) => {
  const t = useTranslate()
  const progress = ((currentIndex + 1) / total) * 100
  const questionNumber = currentIndex + 1
  const promptKey = `quiz.question.${questionNumber}.prompt` as TranslationKey

  return (
    <section className='pt-2'>
      <QuizProgress
        currentIndex={currentIndex}
        total={total}
        progress={progress}
        onBack={onBack}
      />

      <div
        key={currentIndex}
        className={`min-h-100 ${fading ? 'animate-fade-out' : 'animate-fade-in'}`}
      >
        <h2 className='mb-8 font-display text-[clamp(24px,6vw,30px)] font-normal leading-[1.3] tracking-[-0.01em] text-cream-100'>
          {t(promptKey)}
        </h2>

        <ul className='flex flex-col gap-3'>
          {question.options.map((option, index) => {
            const optionNumber = index + 1
            const optionKey =
              `quiz.question.${questionNumber}.option.${optionNumber}` as TranslationKey
            const text = t(optionKey)

            return (
              <li key={optionKey}>
                <QuizOption
                  type={option.type}
                  text={text}
                  letter={String.fromCharCode(65 + index)}
                  selected={selectedAnswer === option.type}
                  disabled={fading}
                  onSelect={onAnswer}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
