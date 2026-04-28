export const AXES = ['EI', 'SN', 'TF', 'JP'] as const
export type Axis = (typeof AXES)[number]

export const AXIS_SIDES = {
  EI: ['E', 'I'],
  SN: ['S', 'N'],
  TF: ['T', 'F'],
  JP: ['J', 'P'],
} as const

export type AxisSide = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

export type MbtiType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP'

export const MBTI_TYPES: readonly MbtiType[] = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP',
]

export type MbtiQuestion = {
  axis: Axis
  // option a maps to the first letter of the axis (E, S, T, J),
  // option b maps to the second letter (I, N, F, P)
  a: AxisSide
  b: AxisSide
}

export type AxisScores = Record<Axis, { a: number; b: number }>

export type MbtiResult = {
  code: MbtiType
  strengths: Record<Axis, { side: AxisSide; percent: number }>
}
