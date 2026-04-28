import { useCallback, useState } from 'react'

import { type AnswersMap } from '../../types'

const DEFAULT_FADE_MS = 180

type UseQuizAnswersParams = {
  total: number
  onComplete: () => void
  fadeMs?: number
}

type UseQuizAnswers<T> = {
  answers: AnswersMap<T>
  currentQuestion: number
  fading: boolean
  handleAnswer: (value: T) => void
  handleBack: () => void
  resetAnswers: () => void
}

export const useQuizAnswers = <T>({
  total,
  onComplete,
  fadeMs = DEFAULT_FADE_MS,
}: UseQuizAnswersParams): UseQuizAnswers<T> => {
  const [answers, setAnswers] = useState<AnswersMap<T>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [fading, setFading] = useState(false)

  const handleAnswer = useCallback(
    (value: T) => {
      if (fading) return
      setFading(true)
      setTimeout(() => {
        setAnswers((prev) => ({ ...prev, [currentQuestion]: value }))
        if (currentQuestion < total - 1) {
          setCurrentQuestion((prev) => prev + 1)
          setFading(false)
        } else {
          setFading(false)
          onComplete()
        }
      }, fadeMs)
    },
    [fading, currentQuestion, total, onComplete, fadeMs],
  )

  const handleBack = useCallback(() => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])

  const resetAnswers = useCallback(() => {
    setAnswers({})
    setCurrentQuestion(0)
    setFading(false)
  }, [])

  return {
    answers,
    currentQuestion,
    fading,
    handleAnswer,
    handleBack,
    resetAnswers,
  }
}
