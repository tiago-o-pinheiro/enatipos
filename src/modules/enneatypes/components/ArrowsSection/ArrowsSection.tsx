'use client'

import Link from 'next/link'

import { LANGUAGE_QUERY_PARAM } from '@/modules/languages/languages.constants'
import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { useLanguageContext } from '@/modules/languages/stores/language-store'
import { type TranslationKey } from '@/translations/translation.types'

import { ARROWS } from '../../enneatypes.constants'
import { type EnneatypeId } from '../../enneatypes.types'

type ArrowsSectionProps = {
  type: EnneatypeId
}

type ArrowRowProps = {
  label: string
  fromType: EnneatypeId
  toType: EnneatypeId
  description: string
  toName: string
  href: string
  accent: 'gold-500' | 'rust'
}

const ACCENT_CLASSES = {
  'gold-500': 'text-gold-500',
  rust: 'text-rust',
} as const

const ArrowRow = ({
  label,
  fromType,
  toType,
  description,
  toName,
  href,
  accent,
}: ArrowRowProps) => (
  <div className='mt-6 first:mt-0'>
    <p
      className={`mb-2 font-display text-xs font-medium uppercase tracking-[0.2em] ${ACCENT_CLASSES[accent]}`}
    >
      {label}
    </p>
    <p className='mb-3 flex items-baseline gap-2 font-display text-[15px] text-warm-gray-500 tabular-nums'>
      <span className='text-cream-200'>{fromType}</span>
      <span aria-hidden='true'>→</span>
      <Link
        href={href}
        className='text-cream-200 underline decoration-oxide-800 underline-offset-4 transition-colors hover:decoration-gold-500 focus-visible:decoration-gold-500 focus-visible:outline-none'
      >
        {toType} · {toName}
      </Link>
    </p>
    <p className='text-[15px] leading-[1.6] text-cream-200'>{description}</p>
  </div>
)

export const ArrowsSection = ({ type }: ArrowsSectionProps) => {
  const t = useTranslate()
  const { language } = useLanguageContext()
  const { growth, stress } = ARROWS[type]

  const growthName = t(`enneatype.${growth}.name` as TranslationKey)
  const stressName = t(`enneatype.${stress}.name` as TranslationKey)
  const growthDescription = t(`enneatype.${type}.growth` as TranslationKey)
  const stressDescription = t(`enneatype.${type}.stress` as TranslationKey)

  const linkFor = (target: EnneatypeId) =>
    `/enneagram/types/${target}?${LANGUAGE_QUERY_PARAM}=${language}`

  return (
    <section className='mt-10 border-t border-oxide-900 pt-8'>
      <p className='mb-5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
        {t('results.arrows.eyebrow')}
      </p>

      <ArrowRow
        label={t('results.arrows.growth.label')}
        fromType={type}
        toType={growth}
        description={growthDescription}
        toName={growthName}
        href={linkFor(growth)}
        accent='gold-500'
      />
      <ArrowRow
        label={t('results.arrows.stress.label')}
        fromType={type}
        toType={stress}
        description={stressDescription}
        toName={stressName}
        href={linkFor(stress)}
        accent='rust'
      />
    </section>
  )
}
