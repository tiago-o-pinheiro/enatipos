'use client'

import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import { CENTER_OF } from '../../enneatypes.constants'
import { type EnneatypeId } from '../../enneatypes.types'
import { type Tritype } from '../../enneatypes.utils'

type TritypeSectionProps = {
  tritype: Tritype
  topType: EnneatypeId
}

export const TritypeSection = ({ tritype, topType }: TritypeSectionProps) => {
  const t = useTranslate()
  const code = tritype.ordered.join('-')

  return (
    <section className='mt-10 border-t border-oxide-900 pt-8'>
      <p className='mb-3 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
        {t('results.tritype.eyebrow')}
      </p>

      <p className='mb-6 font-display text-[clamp(44px,12vw,64px)] font-light leading-[0.9] tracking-[-0.04em] text-gold-400 tabular-nums'>
        {code}
      </p>

      <p className='mb-6 text-[15px] leading-[1.6] text-warm-gray-300'>
        {t('results.tritype.description')}
      </p>

      <ul className='flex flex-col gap-3'>
        {tritype.ordered.map((type) => {
          const center = CENTER_OF[type]
          const name = t(`enneatype.${type}.name` as TranslationKey)
          const centerLabel = t(`enneatype.center.${center}` as TranslationKey)
          const isPrimary = type === topType
          return (
            <li
              key={`${center}-${type}`}
              className='flex items-baseline gap-3 border-l border-oxide-900 pl-4'
            >
              <span
                className={`min-w-[56px] font-display text-[11px] uppercase tracking-[0.2em] ${
                  isPrimary ? 'text-gold-500' : 'text-warm-gray-500'
                }`}
              >
                {centerLabel}
              </span>
              <span
                className={`font-display text-[20px] tabular-nums ${
                  isPrimary ? 'text-gold-400' : 'text-warm-gray-300'
                }`}
              >
                {type}
              </span>
              <span
                className={`flex-1 text-[15px] ${
                  isPrimary ? 'text-cream-100' : 'text-warm-gray-300'
                }`}
              >
                {name}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
