'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'

import { POINT_ANGLES } from '../../enneatypes.constants'
import {
  ENNEATYPE_IDS,
  type EnneatypeId,
  type ScoreMap,
} from '../../enneatypes.types'
import { polarToXY } from '../../enneatypes.utils'

const DIAGRAM_CENTER = 100
const DIAGRAM_RADIUS = 85
const TRIANGLE_PATH: EnneatypeId[] = [3, 6, 9, 3]
const HEXAD_PATH: EnneatypeId[] = [1, 4, 2, 8, 5, 7, 1]
const STROKE_COLOR = '#3a2f24'
const HIGHLIGHT_FILL = '#e0b870'
const POINT_FILL = '#4a3d2d'
const HIGHLIGHT_TEXT_FILL = '#1a1410'
const POINT_TEXT_FILL = '#c8b896'

const POINTS: Record<EnneatypeId, { x: number; y: number }> = ENNEATYPE_IDS.reduce(
  (acc, id) => {
    acc[id] = polarToXY(POINT_ANGLES[id], DIAGRAM_RADIUS, DIAGRAM_CENTER, DIAGRAM_CENTER)
    return acc
  },
  {} as Record<EnneatypeId, { x: number; y: number }>,
)

const buildPath = (ids: EnneatypeId[]) =>
  ids
    .map((id, i) => `${i === 0 ? 'M' : 'L'} ${POINTS[id].x} ${POINTS[id].y}`)
    .join(' ')

const TRIANGLE_D = buildPath(TRIANGLE_PATH)
const HEXAD_D = buildPath(HEXAD_PATH)

type EnneagramDiagramProps = {
  highlightType?: EnneatypeId
  scores?: ScoreMap
  size?: number
}

export const EnneagramDiagram = ({
  highlightType,
  scores,
  size = 200,
}: EnneagramDiagramProps) => {
  const t = useTranslate()
  const maxScore = scores ? Math.max(...Object.values(scores), 1) : 1

  return (
    <svg
      viewBox='0 0 200 200'
      width={size}
      height={size}
      role='img'
      aria-label={t('quiz.diagram.aria-label')}
      className='block'
    >
      <circle
        cx={DIAGRAM_CENTER}
        cy={DIAGRAM_CENTER}
        r={DIAGRAM_RADIUS}
        fill='none'
        stroke={STROKE_COLOR}
        strokeWidth={0.6}
      />
      <path d={TRIANGLE_D} fill='none' stroke={STROKE_COLOR} strokeWidth={0.6} />
      <path d={HEXAD_D} fill='none' stroke={STROKE_COLOR} strokeWidth={0.6} />

      {ENNEATYPE_IDS.map((id) => {
        const { x, y } = POINTS[id]
        const score = scores?.[id] ?? 0
        const isHighlight = id === highlightType
        const pointRadius = scores
          ? 2.5 + (score / maxScore) * 5
          : isHighlight
            ? 6
            : 3

        return (
          <g key={id}>
            <circle
              cx={x}
              cy={y}
              r={pointRadius}
              fill={isHighlight ? HIGHLIGHT_FILL : POINT_FILL}
              opacity={isHighlight ? 1 : 0.7}
            />
            <text
              x={x}
              y={y + 0.5}
              textAnchor='middle'
              dominantBaseline='middle'
              fontSize={isHighlight ? 6.5 : 5.5}
              fontWeight={isHighlight ? 600 : 400}
              fill={isHighlight ? HIGHLIGHT_TEXT_FILL : POINT_TEXT_FILL}
              fontFamily='var(--font-display)'
            >
              {id}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
