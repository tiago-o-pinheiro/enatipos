'use client'

import { QuizProgress } from '@/modules/enneatypes/components/QuizProgress'
import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import { type MbtiQuestion } from '../../mbti.types'
import { QuizOption } from '../QuizOption'

type QuizScreenProps = {
  question: MbtiQuestion
  currentIndex: number
  total: number
  fading: boolean
  selectedAnswer?: 'a' | 'b'
  onAnswer: (choice: 'a' | 'b') => void
  onBack: () => void
}

export const QuizScreen = ({
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
  const promptKey = `mbti.quiz.question.${questionNumber}.prompt` as TranslationKey
  const optionAKey = `mbti.quiz.question.${questionNumber}.option.a` as TranslationKey
  const optionBKey = `mbti.quiz.question.${questionNumber}.option.b` as TranslationKey

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
          <li>
            <QuizOption
              choice='a'
              letter='A'
              text={t(optionAKey)}
              selected={selectedAnswer === 'a'}
              disabled={fading}
              onSelect={onAnswer}
            />
          </li>
          <li>
            <QuizOption
              choice='b'
              letter='B'
              text={t(optionBKey)}
              selected={selectedAnswer === 'b'}
              disabled={fading}
              onSelect={onAnswer}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
