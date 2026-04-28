import { useCallback, useState } from 'react'

import { type QuizStage } from '../../types'

type UseQuizStage = {
  stage: QuizStage
  goToQuiz: () => void
  goToResults: () => void
  reset: () => void
}

export const useQuizStage = (): UseQuizStage => {
  const [stage, setStage] = useState<QuizStage>('intro')

  const goToQuiz = useCallback(() => setStage('quiz'), [])
  const goToResults = useCallback(() => setStage('results'), [])
  const reset = useCallback(() => setStage('intro'), [])

  return { stage, goToQuiz, goToResults, reset }
}
