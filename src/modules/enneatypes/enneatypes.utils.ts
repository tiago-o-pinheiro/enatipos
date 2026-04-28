import {
  ADJACENTS,
  CENTERS,
  CENTER_MEMBERS,
  CENTER_OF,
  type Center,
  QUESTIONS,
} from './enneatypes.constants'
import {
  type AnswersMap,
  ENNEATYPE_IDS,
  type EnneatypeId,
  type RankedType,
  type ScoreMap,
} from './enneatypes.types'

export type Tritype = {
  ordered: readonly [EnneatypeId, EnneatypeId, EnneatypeId]
  byCenter: Record<Center, EnneatypeId>
}

export type CenterWeights = Record<Center, number>

export type Point = { x: number; y: number }

export const polarToXY = (
  angleDeg: number,
  radius: number,
  cx: number,
  cy: number,
): Point => {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  }
}

const buildEmptyScoreMap = (): ScoreMap =>
  ENNEATYPE_IDS.reduce((acc, id) => {
    acc[id] = 0
    return acc
  }, {} as ScoreMap)

export const computeScores = (answers: AnswersMap): ScoreMap => {
  const scores = buildEmptyScoreMap()
  Object.values(answers).forEach((type) => {
    scores[type] += 1
  })
  return scores
}

export const computeMaxPossible = (): ScoreMap => {
  const max = buildEmptyScoreMap()
  QUESTIONS.forEach((question) =>
    question.options.forEach((option) => {
      max[option.type] += 1
    }),
  )
  return max
}

export const computeNormalized = (
  scores: ScoreMap,
  maxPossible: ScoreMap,
): ScoreMap => {
  const normalized = buildEmptyScoreMap()
  ENNEATYPE_IDS.forEach((id) => {
    normalized[id] = maxPossible[id] > 0 ? scores[id] / maxPossible[id] : 0
  })
  return normalized
}

export const rankTypes = (
  normalized: ScoreMap,
  raw: ScoreMap,
): RankedType[] =>
  [...ENNEATYPE_IDS]
    .map((id) => ({ type: id, score: normalized[id], raw: raw[id] }))
    .sort((a, b) => b.score - a.score)

export const pickWing = (
  topType: EnneatypeId,
  normalized: ScoreMap,
): EnneatypeId => {
  const [a, b] = ADJACENTS[topType]
  return normalized[a] >= normalized[b] ? a : b
}

export const computeTritype = (
  normalized: ScoreMap,
  topType: EnneatypeId,
): Tritype => {
  const primaryCenter = CENTER_OF[topType]

  const byCenter = CENTERS.reduce((acc, center) => {
    if (center === primaryCenter) {
      // Primary center is locked to the top type so the tritype always
      // includes it, even if another type in that center scored higher.
      acc[center] = topType
      return acc
    }
    const winner = [...CENTER_MEMBERS[center]].sort((a, b) => {
      const delta = normalized[b] - normalized[a]
      return delta !== 0 ? delta : a - b
    })[0]
    acc[center] = winner
    return acc
  }, {} as Record<Center, EnneatypeId>)

  const supporting = CENTERS.filter((c) => c !== primaryCenter)
    .map((c) => byCenter[c])
    .sort((a, b) => normalized[b] - normalized[a])

  return {
    ordered: [topType, supporting[0], supporting[1]] as const,
    byCenter,
  }
}

// Canonical slug: numerically-sorted "lo-hi" so each unordered pair has
// exactly one URL. Self-pairs ("4-4") are valid and included.
export const compatPairSlug = (a: EnneatypeId, b: EnneatypeId): string => {
  const [lo, hi] = a <= b ? [a, b] : [b, a]
  return `${lo}-${hi}`
}

export const parseCompatPair = (
  slug: string,
): readonly [EnneatypeId, EnneatypeId] | null => {
  const parts = slug.split('-')
  if (parts.length !== 2) return null
  const a = Number.parseInt(parts[0], 10)
  const b = Number.parseInt(parts[1], 10)
  const valid = (n: number): n is EnneatypeId =>
    (ENNEATYPE_IDS as readonly number[]).includes(n)
  if (!valid(a) || !valid(b)) return null
  return [a, b]
}

export const COMPAT_PAIRS: readonly (readonly [EnneatypeId, EnneatypeId])[] = (() => {
  const out: [EnneatypeId, EnneatypeId][] = []
  for (let i = 0; i < ENNEATYPE_IDS.length; i++) {
    for (let j = i; j < ENNEATYPE_IDS.length; j++) {
      out.push([ENNEATYPE_IDS[i], ENNEATYPE_IDS[j]])
    }
  }
  return out
})()

export const computeCenterWeights = (normalized: ScoreMap): CenterWeights => {
  const raw = CENTERS.reduce((acc, center) => {
    acc[center] = CENTER_MEMBERS[center].reduce(
      (sum, id) => sum + normalized[id],
      0,
    )
    return acc
  }, {} as CenterWeights)

  const total = CENTERS.reduce((sum, c) => sum + raw[c], 0)

  // Empty-quiz fallback: split evenly so the bar never collapses to nothing.
  if (total === 0) {
    return CENTERS.reduce((acc, c) => {
      acc[c] = 1 / 3
      return acc
    }, {} as CenterWeights)
  }

  return CENTERS.reduce((acc, c) => {
    acc[c] = raw[c] / total
    return acc
  }, {} as CenterWeights)
}
