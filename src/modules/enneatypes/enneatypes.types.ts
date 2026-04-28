import { type AnswersMap as SharedAnswersMap } from '@/modules/shared/types'

export const ENNEATYPE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const
export type EnneatypeId = (typeof ENNEATYPE_IDS)[number]

export type QuizOption = {
  type: EnneatypeId
}

export type QuizQuestion = {
  options: readonly QuizOption[]
}

export type ScoreMap = Record<EnneatypeId, number>

export type RankedType = {
  type: EnneatypeId
  score: number
  raw: number
}

export type AnswersMap = SharedAnswersMap<EnneatypeId>
