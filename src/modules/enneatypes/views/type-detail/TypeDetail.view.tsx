'use client'

import Image from 'next/image'
import Link from 'next/link'

import { LANGUAGE_QUERY_PARAM } from '@/modules/languages/languages.constants'
import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { useLanguageContext } from '@/modules/languages/stores/language-store'
import { ResultSection } from '@/modules/shared/components/ResultSection'
import { type TranslationKey } from '@/translations/translation.types'

import { ArrowsSection } from '../../components/ArrowsSection'
import { FAMOUS_PEOPLE } from '../../enneatypes.constants'
import { ENNEATYPE_IDS, type EnneatypeId } from '../../enneatypes.types'
import { compatPairSlug } from '../../enneatypes.utils'

type TypeDetailViewProps = {
  type: EnneatypeId
}

export const TypeDetailView = ({ type }: TypeDetailViewProps) => {
  const t = useTranslate()
  const { language } = useLanguageContext()

  const name = t(`enneatype.${type}.name` as TranslationKey)
  const subtitle = t(`enneatype.${type}.subtitle` as TranslationKey)
  const essence = t(`enneatype.${type}.essence` as TranslationKey)
  const motivation = t(`enneatype.${type}.motivation` as TranslationKey)
  const shadow = t(`enneatype.${type}.shadow` as TranslationKey)
  const gift = t(`enneatype.${type}.gift` as TranslationKey)
  const keyWork = t(`enneatype.${type}.key-work` as TranslationKey)

  return (
    <main className='mx-auto max-w-xl px-5 pt-6 pb-10'>
      <section className='animate-fade-in'>
        <p className='mb-4 pt-5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
          {t('wiki.enneagram.index.title')}
        </p>

        <div className='mb-4 flex items-center gap-4'>
          <span className='font-display text-[clamp(96px,26vw,140px)] font-light leading-[0.85] tracking-[-0.04em] text-gold-400'>
            {type}
          </span>
          <Image
            src={`/images/enneagram/${type}.png`}
            alt={`${type} — ${name}`}
            width={1024}
            height={1024}
            priority
            className='ml-auto h-auto w-[clamp(96px,30vw,140px)]'
          />
        </div>

        <h1 className='font-display text-[clamp(22px,5.5vw,28px)] font-normal leading-[1.15] tracking-[-0.01em] text-cream-100'>
          {name}
        </h1>
        <p className='mt-1 mb-6 font-display text-base italic text-warm-gray-500'>
          {subtitle}
        </p>

        <ResultSection label={t('results.section.essence')} body={essence} />
        <ResultSection
          label={t('results.section.motivation')}
          body={motivation}
        />
        <ResultSection
          label={t('results.section.shadow')}
          body={shadow}
          accent='rust'
        />
        <ResultSection label={t('results.section.gift')} body={gift} />
        <ResultSection
          label={t('results.section.key-work')}
          body={keyWork}
          accent='gold-400'
        />

        <ArrowsSection type={type} />

        <section className='mt-8 border-t border-oxide-900 pt-6'>
          <p className='mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-gold-500'>
            {t('wiki.famous-people.eyebrow')}
          </p>
          <ul className='flex flex-wrap gap-x-2 gap-y-1.5 text-base leading-[1.6] text-cream-200'>
            {FAMOUS_PEOPLE[type].map((name, i) => (
              <li key={name} className='flex items-center gap-2'>
                <span>{name}</span>
                {i < FAMOUS_PEOPLE[type].length - 1 && (
                  <span aria-hidden='true' className='text-warm-gray-700'>
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className='mt-8 border-t border-oxide-900 pt-6'>
          <p className='mb-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-gold-500'>
            {t('compatibility.cross-link.eyebrow')}
          </p>
          <p className='mb-4 text-sm text-warm-gray-300'>
            {t('compatibility.cross-link.intro.enneagram', { type })}
          </p>
          <ul className='flex flex-wrap gap-2'>
            {ENNEATYPE_IDS.map((other) => (
              <li key={other}>
                <Link
                  href={`/enneagram/compatibility/${compatPairSlug(type, other)}?${LANGUAGE_QUERY_PARAM}=${language}`}
                  className='inline-flex items-center rounded-[2px] border border-oxide-900 px-4 py-1.5 font-display text-base font-light tracking-[-0.02em] text-gold-400 transition-all duration-150 ease-out hover:border-gold-500 hover:bg-gold-500/5 hover:text-gold-300 focus-visible:border-gold-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
                >
                  {other}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className='mt-10 flex flex-col gap-3'>
          <Link
            href='/enneagram'
            className='w-full cursor-pointer rounded-[2px] border border-oxide-800 bg-transparent px-6 py-4 text-center font-display text-[15px] tracking-[0.05em] text-gold-500
                       transition-all duration-200 ease-out
                       hover:border-gold-500 hover:bg-gold-500/5 active:scale-[0.985]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
          >
            {t('wiki.detail.take-test.enneagram')}
          </Link>

          <Link
            href='/enneagram/types'
            className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500
                       transition-colors duration-200 ease-out
                       hover:text-cream-200
                       focus-visible:text-cream-200 focus-visible:outline-none'
          >
            {t('wiki.detail.back.enneagram')}
          </Link>

          <Link
            href='/'
            className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-700
                       transition-colors duration-200 ease-out
                       hover:text-cream-200
                       focus-visible:text-cream-200 focus-visible:outline-none'
          >
            {t('wiki.detail.back-home')}
          </Link>
        </div>
      </section>
    </main>
  )
}
