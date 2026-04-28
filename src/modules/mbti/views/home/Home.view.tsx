'use client'

import { useCallback, useMemo } from 'react'

import { useQuizAnswers } from '@/modules/shared/hooks/use-quiz-answers'
import { useQuizStage } from '@/modules/shared/hooks/use-quiz-stage'

import { IntroScreen } from '../../components/IntroScreen'
import { QuizScreen } from '../../components/QuizScreen'
import { ResultsScreen } from '../../components/ResultsScreen'
import { FADE_MS, MBTI_QUESTIONS } from '../../mbti.constants'
import { computeAxisScores, pickType } from '../../mbti.utils'

export const HomeView = () => {
  const { stage, goToQuiz, goToResults, reset: resetStage } = useQuizStage()
  const {
    answers,
    currentQuestion,
    fading,
    handleAnswer,
    handleBack,
    resetAnswers,
  } = useQuizAnswers<'a' | 'b'>({
    total: MBTI_QUESTIONS.length,
    onComplete: goToResults,
    fadeMs: FADE_MS,
  })

  const handleRestart = useCallback(() => {
    resetAnswers()
    resetStage()
  }, [resetAnswers, resetStage])

  const result = useMemo(() => {
    if (stage !== 'results') return null
    const scores = computeAxisScores(answers, MBTI_QUESTIONS)
    return pickType(scores, MBTI_QUESTIONS)
  }, [stage, answers])

  return (
    <main className='mx-auto max-w-xl px-5 pt-6 pb-10'>
      {stage === 'intro' && <IntroScreen onStart={goToQuiz} />}

      {stage === 'quiz' && (
        <QuizScreen
          question={MBTI_QUESTIONS[currentQuestion]}
          currentIndex={currentQuestion}
          total={MBTI_QUESTIONS.length}
          fading={fading}
          selectedAnswer={answers[currentQuestion]}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}

      {stage === 'results' && result && (
        <ResultsScreen result={result} onRestart={handleRestart} />
      )}
    </main>
  )
}
