import { type MbtiQuestion, type MbtiType } from './mbti.types'

export const FADE_MS = 180

// Widely-cited examples per type. Public figures only; typings are popular
// consensus, not formally administered — meant as recognition anchors for
// the wiki, not authoritative claims.
export const FAMOUS_PEOPLE: Record<MbtiType, readonly string[]> = {
  INTJ: ['Friedrich Nietzsche', 'Hannah Arendt', 'Stephen Hawking', 'Elon Musk', 'Mark Zuckerberg'],
  INTP: ['Albert Einstein', 'Marie Curie', 'René Descartes', 'Charles Darwin', 'Bill Gates'],
  ENTJ: ['Steve Jobs', 'Margaret Thatcher', 'Napoleon Bonaparte', 'Franklin D. Roosevelt', 'Gordon Ramsay'],
  ENTP: ['Leonardo da Vinci', 'Mark Twain', 'Benjamin Franklin', 'Thomas Edison', 'Walt Disney'],
  INFJ: ['Carl Jung', 'Plato', 'Mahatma Gandhi', 'Martin Luther King Jr.', 'Nelson Mandela'],
  INFP: ['William Shakespeare', 'J.R.R. Tolkien', 'Vincent van Gogh', 'Søren Kierkegaard', 'Audrey Hepburn'],
  ENFJ: ['Barack Obama', 'Maya Angelou', 'Oprah Winfrey', 'Fred Rogers', 'Jennifer Lawrence'],
  ENFP: ['Robin Williams', 'Robert Downey Jr.', 'Quentin Tarantino', 'Sandra Bullock', 'Russell Brand'],
  ISTJ: ['George Washington', 'Angela Merkel', 'Warren Buffett', 'Queen Elizabeth II', 'Natalie Portman'],
  ISFJ: ['Mother Teresa', 'Rosa Parks', 'Kate Middleton', 'Anne Hathaway', 'Selena Gomez'],
  ESTJ: ['Hillary Clinton', 'Henry Ford', 'Frank Sinatra', 'John D. Rockefeller', 'Judy Sheindlin'],
  ESFJ: ['Taylor Swift', 'Bill Clinton', 'Jennifer Garner', 'Sally Field', 'Hugh Jackman'],
  ISTP: ['Clint Eastwood', 'Bear Grylls', 'Daniel Craig', 'Michael Jordan', 'Tom Cruise'],
  ISFP: ['Frida Kahlo', 'Bob Dylan', 'Michael Jackson', 'Lana Del Rey', 'David Bowie'],
  ESTP: ['Donald Trump', 'Ernest Hemingway', 'Madonna', 'Eddie Murphy', 'Bruce Willis'],
  ESFP: ['Elvis Presley', 'Marilyn Monroe', 'Adele', 'Jamie Oliver', 'Will Smith'],
}

// 24 questions — 6 per axis. Shuffled so consecutive questions don't probe the
// same axis. The `axis` and `a/b` fields here are scoring-only; prompt + option
// copy live in translations under `mbti.quiz.question.N.prompt/option.a/option.b`.
export const MBTI_QUESTIONS: readonly MbtiQuestion[] = [
  // 1 — E/I
  { axis: 'EI', a: 'E', b: 'I' },
  // 2 — S/N
  { axis: 'SN', a: 'S', b: 'N' },
  // 3 — T/F
  { axis: 'TF', a: 'T', b: 'F' },
  // 4 — J/P
  { axis: 'JP', a: 'J', b: 'P' },
  // 5 — E/I
  { axis: 'EI', a: 'E', b: 'I' },
  // 6 — S/N
  { axis: 'SN', a: 'S', b: 'N' },
  // 7 — T/F
  { axis: 'TF', a: 'T', b: 'F' },
  // 8 — J/P
  { axis: 'JP', a: 'J', b: 'P' },
  // 9 — E/I
  { axis: 'EI', a: 'E', b: 'I' },
  // 10 — S/N
  { axis: 'SN', a: 'S', b: 'N' },
  // 11 — T/F
  { axis: 'TF', a: 'T', b: 'F' },
  // 12 — J/P
  { axis: 'JP', a: 'J', b: 'P' },
  // 13 — E/I
  { axis: 'EI', a: 'E', b: 'I' },
  // 14 — S/N
  { axis: 'SN', a: 'S', b: 'N' },
  // 15 — T/F
  { axis: 'TF', a: 'T', b: 'F' },
  // 16 — J/P
  { axis: 'JP', a: 'J', b: 'P' },
  // 17 — E/I
  { axis: 'EI', a: 'E', b: 'I' },
  // 18 — S/N
  { axis: 'SN', a: 'S', b: 'N' },
  // 19 — T/F
  { axis: 'TF', a: 'T', b: 'F' },
  // 20 — J/P
  { axis: 'JP', a: 'J', b: 'P' },
  // 21 — E/I
  { axis: 'EI', a: 'E', b: 'I' },
  // 22 — S/N
  { axis: 'SN', a: 'S', b: 'N' },
  // 23 — T/F
  { axis: 'TF', a: 'T', b: 'F' },
  // 24 — J/P
  { axis: 'JP', a: 'J', b: 'P' },
]
