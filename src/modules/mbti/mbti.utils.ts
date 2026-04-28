import { type AnswersMap } from '@/modules/shared/types'

import {
  AXES,
  type Axis,
  type AxisScores,
  type AxisSide,
  type MbtiQuestion,
  type MbtiResult,
  type MbtiType,
  MBTI_TYPES,
} from './mbti.types'

// Canonical slug: alphabetically-sorted "X-Y" so each unordered pair has
// exactly one URL. Self-pairs ("INTJ-INTJ") are valid and included.
export const compatPairSlug = (a: MbtiType, b: MbtiType): string =>
  [a, b].sort().join('-')

export const parseCompatPair = (
  slug: string,
): readonly [MbtiType, MbtiType] | null => {
  const parts = slug.split('-')
  if (parts.length !== 2) return null
  const [a, b] = parts
  if (!MBTI_TYPES.includes(a as MbtiType) || !MBTI_TYPES.includes(b as MbtiType))
    return null
  return [a as MbtiType, b as MbtiType]
}

export const COMPAT_PAIRS: readonly (readonly [MbtiType, MbtiType])[] = (() => {
  const sorted = [...MBTI_TYPES].sort()
  const out: [MbtiType, MbtiType][] = []
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i; j < sorted.length; j++) {
      out.push([sorted[i], sorted[j]])
    }
  }
  return out
})()

export const computeAxisScores = (
  answers: AnswersMap<'a' | 'b'>,
  questions: readonly MbtiQuestion[],
): AxisScores => {
  const init = AXES.reduce<AxisScores>(
    (acc, axis) => ({ ...acc, [axis]: { a: 0, b: 0 } }),
    {} as AxisScores,
  )

  Object.entries(answers).forEach(([index, choice]) => {
    const question = questions[Number(index)]
    if (!question) return
    init[question.axis][choice] += 1
  })

  return init
}

// Canonical tie-break: when votes tie on an axis, the introvert side wins
// (I, N, F, P). This mirrors most online MBTI tests.
const TIE_BREAK: Record<Axis, AxisSide> = {
  EI: 'I',
  SN: 'N',
  TF: 'F',
  JP: 'P',
}

export const pickType = (
  scores: AxisScores,
  questions: readonly MbtiQuestion[],
): MbtiResult => {
  const questionsPerAxis = AXES.reduce<Record<Axis, number>>(
    (acc, axis) => ({
      ...acc,
      [axis]: questions.filter((q) => q.axis === axis).length,
    }),
    {} as Record<Axis, number>,
  )

  const strengths = AXES.reduce<MbtiResult['strengths']>((acc, axis) => {
    const { a, b } = scores[axis]
    const first = questions.find((q) => q.axis === axis)
    if (!first) throw new Error(`No question for axis ${axis}`)
    const aSide = first.a
    const bSide = first.b

    let winner: AxisSide
    let winnerCount: number
    if (a > b) {
      winner = aSide
      winnerCount = a
    } else if (b > a) {
      winner = bSide
      winnerCount = b
    } else {
      winner = TIE_BREAK[axis]
      winnerCount = a
    }

    const total = questionsPerAxis[axis]
    const percent = total === 0 ? 50 : Math.round((winnerCount / total) * 100)

    return { ...acc, [axis]: { side: winner, percent } }
  }, {} as MbtiResult['strengths'])

  const code = (
    strengths.EI.side +
    strengths.SN.side +
    strengths.TF.side +
    strengths.JP.side
  ) as MbtiType

  return { code, strengths }
}
