export const QUIZ_STAGES = ['intro', 'quiz', 'results'] as const
export type QuizStage = (typeof QUIZ_STAGES)[number]

export type AnswersMap<T> = Record<number, T>
