import {
  type EnneatypeId,
  type QuizQuestion,
} from './enneatypes.types'

export const FADE_MS = 180

export const ADJACENTS: Record<EnneatypeId, readonly [EnneatypeId, EnneatypeId]> = {
  1: [9, 2],
  2: [1, 3],
  3: [2, 4],
  4: [3, 5],
  5: [4, 6],
  6: [5, 7],
  7: [6, 8],
  8: [7, 9],
  9: [8, 1],
}

export const CENTERS = ['gut', 'heart', 'head'] as const
export type Center = (typeof CENTERS)[number]

export const CENTER_MEMBERS: Record<Center, readonly EnneatypeId[]> = {
  gut: [8, 9, 1],
  heart: [2, 3, 4],
  head: [5, 6, 7],
}

export const CENTER_OF: Record<EnneatypeId, Center> = {
  8: 'gut',
  9: 'gut',
  1: 'gut',
  2: 'heart',
  3: 'heart',
  4: 'heart',
  5: 'head',
  6: 'head',
  7: 'head',
}

// Riso-Hudson arrow map.
// growth: the type's integration direction (where they move in health).
// stress: the type's disintegration direction (where they move under strain).
export const ARROWS: Record<
  EnneatypeId,
  { growth: EnneatypeId; stress: EnneatypeId }
> = {
  1: { growth: 7, stress: 4 },
  2: { growth: 4, stress: 8 },
  3: { growth: 6, stress: 9 },
  4: { growth: 1, stress: 2 },
  5: { growth: 8, stress: 7 },
  6: { growth: 9, stress: 3 },
  7: { growth: 5, stress: 1 },
  8: { growth: 2, stress: 5 },
  9: { growth: 3, stress: 6 },
}

// Widely-cited examples per type. Public figures only; typings are popular
// consensus from Enneagram literature, not formally administered.
export const FAMOUS_PEOPLE: Record<EnneatypeId, readonly string[]> = {
  1: ['Mahatma Gandhi', 'Plato', 'Hillary Clinton', 'Confucius', 'Pope John Paul II'],
  2: ['Mother Teresa', 'Princess Diana', 'Eleanor Roosevelt', 'Dolly Parton', 'Stevie Wonder'],
  3: ['Tony Robbins', 'Madonna', 'Bill Clinton', 'Tom Cruise', 'Beyoncé'],
  4: ['Frida Kahlo', 'Vincent van Gogh', 'Bob Dylan', 'Edgar Allan Poe', 'Johnny Depp'],
  5: ['Albert Einstein', 'Stephen Hawking', 'Bill Gates', 'Mark Zuckerberg', 'Friedrich Nietzsche'],
  6: ['George H.W. Bush', 'Robert F. Kennedy', 'Mark Twain', 'Jon Stewart', 'Ellen DeGeneres'],
  7: ['Robin Williams', 'Jim Carrey', 'Cameron Diaz', 'Steven Spielberg', 'Mick Jagger'],
  8: ['Pablo Picasso', 'Martin Luther King Jr.', 'Winston Churchill', 'Serena Williams', 'Donald Trump'],
  9: ['Barack Obama', 'Abraham Lincoln', 'Carl Jung', 'Audrey Hepburn', 'Walt Disney'],
}

export const POINT_ANGLES: Record<EnneatypeId, number> = {
  9: 270,
  1: 310,
  2: 350,
  3: 30,
  4: 70,
  5: 110,
  6: 150,
  7: 190,
  8: 230,
}

export const QUESTIONS: readonly QuizQuestion[] = [
  { options: [{ type: 1 }, { type: 2 }, { type: 3 }, { type: 4 }] },
  { options: [{ type: 5 }, { type: 6 }, { type: 7 }, { type: 8 }] },
  { options: [{ type: 9 }, { type: 1 }, { type: 2 }, { type: 3 }] },
  { options: [{ type: 4 }, { type: 5 }, { type: 6 }, { type: 7 }] },
  { options: [{ type: 8 }, { type: 9 }, { type: 1 }, { type: 2 }] },
  { options: [{ type: 3 }, { type: 4 }, { type: 5 }, { type: 6 }] },
  { options: [{ type: 7 }, { type: 8 }, { type: 9 }, { type: 1 }] },
  { options: [{ type: 2 }, { type: 3 }, { type: 4 }, { type: 5 }] },
  { options: [{ type: 6 }, { type: 7 }, { type: 8 }, { type: 9 }] },
  { options: [{ type: 1 }, { type: 2 }, { type: 3 }, { type: 4 }] },
  { options: [{ type: 5 }, { type: 6 }, { type: 7 }, { type: 8 }] },
  { options: [{ type: 9 }, { type: 1 }, { type: 2 }, { type: 3 }] },
  { options: [{ type: 4 }, { type: 5 }, { type: 6 }, { type: 7 }] },
  { options: [{ type: 8 }, { type: 9 }, { type: 1 }, { type: 2 }] },
  { options: [{ type: 3 }, { type: 4 }, { type: 5 }, { type: 6 }] },
  { options: [{ type: 7 }, { type: 8 }, { type: 9 }, { type: 1 }] },
  { options: [{ type: 2 }, { type: 3 }, { type: 4 }, { type: 5 }] },
  { options: [{ type: 6 }, { type: 7 }, { type: 8 }, { type: 9 }] },
  { options: [{ type: 1 }, { type: 2 }, { type: 3 }, { type: 4 }] },
  { options: [{ type: 5 }, { type: 6 }, { type: 7 }, { type: 8 }] },
  { options: [{ type: 9 }, { type: 1 }, { type: 2 }, { type: 3 }] },
  { options: [{ type: 4 }, { type: 5 }, { type: 6 }, { type: 7 }] },
  { options: [{ type: 8 }, { type: 9 }, { type: 1 }, { type: 2 }] },
  { options: [{ type: 3 }, { type: 4 }, { type: 5 }, { type: 6 }] },
  { options: [{ type: 7 }, { type: 8 }, { type: 9 }, { type: 1 }] },
  { options: [{ type: 2 }, { type: 3 }, { type: 4 }, { type: 5 }] },
  { options: [{ type: 6 }, { type: 7 }, { type: 8 }, { type: 9 }] },
  { options: [{ type: 1 }, { type: 2 }, { type: 3 }, { type: 4 }] },
  { options: [{ type: 5 }, { type: 6 }, { type: 7 }, { type: 8 }] },
  { options: [{ type: 9 }, { type: 1 }, { type: 2 }, { type: 3 }] },
]
