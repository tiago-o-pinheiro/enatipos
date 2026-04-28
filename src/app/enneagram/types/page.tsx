import { type Metadata } from 'next'

import { TypesIndexView } from '@/modules/enneatypes/views/types-index'

export const metadata: Metadata = {
  title: 'The 9 Enneagram types — Enatipos',
  description:
    'Nine structures of unconscious motivation. Browse each Enneagram type — essence, motivation, shadow, gift, key work.',
  openGraph: {
    title: 'The 9 Enneagram types — Enatipos',
    description: 'Nine structures of unconscious motivation.',
    type: 'website',
  },
}

// eslint-disable-next-line import/no-default-export
export default TypesIndexView
