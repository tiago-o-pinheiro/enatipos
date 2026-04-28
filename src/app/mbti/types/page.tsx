import { type Metadata } from 'next'

import { TypesIndexView } from '@/modules/mbti/views/types-index'

export const metadata: Metadata = {
  title: 'The 16 Jung / MBTI types — Enatipos',
  description:
    'Sixteen ways of being in the world. Browse each Jung / MBTI type — essence, motivation, shadow, gift, key work.',
  openGraph: {
    title: 'The 16 Jung / MBTI types — Enatipos',
    description: 'Sixteen ways of being in the world.',
    type: 'website',
  },
}

// eslint-disable-next-line import/no-default-export
export default TypesIndexView
