'use client'

import { useCallback } from 'react'

import { useQuizAnswers } from '@/modules/shared/hooks/use-quiz-answers'
import { useQuizStage } from '@/modules/shared/hooks/use-quiz-stage'

import { IntroScreen } from '../../components/IntroScreen'
import { QuizScreen } from '../../components/QuizScreen'
import { ResultsScreen } from '../../components/ResultsScreen'
import { FADE_MS, QUESTIONS } from '../../enneatypes.constants'
import { type EnneatypeId } from '../../enneatypes.types'
import { useQuizScores } from '../../hooks/use-quiz-scores'

export const HomeView = () => {
  const { stage, goToQuiz, goToResults, reset: resetStage } = useQuizStage()
  const {
    answers,
    currentQuestion,
    fading,
    handleAnswer,
    handleBack,
    resetAnswers,
  } = useQuizAnswers<EnneatypeId>({
    total: QUESTIONS.length,
    onComplete: goToResults,
    fadeMs: FADE_MS,
  })
  const { scores, ranked, topType, wing, tritype, centerWeights } =
    useQuizScores(answers)

  const handleRestart = useCallback(() => {
    resetAnswers()
    resetStage()
  }, [resetAnswers, resetStage])

  return (
    <main className='mx-auto max-w-xl px-5 pt-6 pb-10'>
      {stage === 'intro' && <IntroScreen onStart={goToQuiz} />}

      {stage === 'quiz' && (
        <QuizScreen
          question={QUESTIONS[currentQuestion]}
          currentIndex={currentQuestion}
          total={QUESTIONS.length}
          fading={fading}
          selectedAnswer={answers[currentQuestion]}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}

      {stage === 'results' && (
        <ResultsScreen
          topType={topType}
          wing={wing}
          ranked={ranked}
          scores={scores}
          tritype={tritype}
          centerWeights={centerWeights}
          onRestart={handleRestart}
        />
      )}
    </main>
  )
}
