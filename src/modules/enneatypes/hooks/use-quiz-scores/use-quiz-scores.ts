import { useMemo } from 'react'

import {
  type AnswersMap,
  type EnneatypeId,
  type RankedType,
  type ScoreMap,
} from '../../enneatypes.types'
import {
  type CenterWeights,
  computeCenterWeights,
  computeMaxPossible,
  computeNormalized,
  computeScores,
  computeTritype,
  pickWing,
  rankTypes,
  type Tritype,
} from '../../enneatypes.utils'

type UseQuizScores = {
  scores: ScoreMap
  normalized: ScoreMap
  ranked: RankedType[]
  topType: EnneatypeId
  wing: EnneatypeId
  tritype: Tritype
  centerWeights: CenterWeights
}

export const useQuizScores = (answers: AnswersMap): UseQuizScores => {
  const scores = useMemo(() => computeScores(answers), [answers])
  const maxPossible = useMemo(() => computeMaxPossible(), [])
  const normalized = useMemo(
    () => computeNormalized(scores, maxPossible),
    [scores, maxPossible],
  )
  const ranked = useMemo(() => rankTypes(normalized, scores), [normalized, scores])
  const topType: EnneatypeId = ranked[0]?.type ?? 1
  const wing = useMemo(() => pickWing(topType, normalized), [topType, normalized])
  const tritype = useMemo(
    () => computeTritype(normalized, topType),
    [normalized, topType],
  )
  const centerWeights = useMemo(
    () => computeCenterWeights(normalized),
    [normalized],
  )

  return { scores, normalized, ranked, topType, wing, tritype, centerWeights }
}
