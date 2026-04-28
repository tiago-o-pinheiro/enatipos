'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useLocaleHref } from '@/modules/languages/hooks/use-locale-href'
import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { ResultSection } from '@/modules/shared/components/ResultSection'
import { type TranslationKey } from '@/translations/translation.types'

import { FAMOUS_PEOPLE } from '../../mbti.constants'
import { MBTI_TYPES, type MbtiType } from '../../mbti.types'
import { compatPairSlug } from '../../mbti.utils'

type TypeDetailViewProps = {
  code: MbtiType
}

export const TypeDetailView = ({ code }: TypeDetailViewProps) => {
  const t = useTranslate()
  const localeHref = useLocaleHref()
  const compatTypes = [...MBTI_TYPES].sort()

  const name = t(`mbti.type.${code}.name` as TranslationKey)
  const subtitle = t(`mbti.type.${code}.subtitle` as TranslationKey)
  const essence = t(`mbti.type.${code}.essence` as TranslationKey)
  const motivation = t(`mbti.type.${code}.motivation` as TranslationKey)
  const shadow = t(`mbti.type.${code}.shadow` as TranslationKey)
  const gift = t(`mbti.type.${code}.gift` as TranslationKey)
  const keyWork = t(`mbti.type.${code}.key-work` as TranslationKey)

  return (
    <main className='mx-auto max-w-xl px-5 pt-6 pb-10'>
      <section className='animate-fade-in'>
        <p className='mb-4 pt-5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
          {t('wiki.mbti.index.title')}
        </p>

        <div className='mb-4 flex items-baseline gap-4'>
          <span className='font-display text-[clamp(56px,18vw,96px)] font-light leading-[0.85] tracking-[-0.05em] text-gold-400'>
            {code}
          </span>
          <div className='flex-1'>
            <h1 className='font-display text-[clamp(22px,5.5vw,28px)] font-normal leading-[1.15] tracking-[-0.01em] text-cream-100'>
              {name}
            </h1>
            <p className='mt-1 font-display text-base italic text-warm-gray-500'>
              {subtitle}
            </p>
          </div>
        </div>

        <div className='mb-8 flex justify-center'>
          <Image
            src={`/images/mbti/${code}.png`}
            alt={`${code} — ${name}`}
            width={1254}
            height={1254}
            priority
            className='h-auto w-full max-w-[320px]'
          />
        </div>

        <ResultSection label={t('mbti.results.eyebrow')} body={essence} />
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

        <section className='mt-8 border-t border-oxide-900 pt-6'>
          <p className='mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-gold-500'>
            {t('wiki.famous-people.eyebrow')}
          </p>
          <ul className='flex flex-wrap gap-x-2 gap-y-1.5 text-base leading-[1.6] text-cream-200'>
            {FAMOUS_PEOPLE[code].map((name, i) => (
              <li key={name} className='flex items-center gap-2'>
                <span>{name}</span>
                {i < FAMOUS_PEOPLE[code].length - 1 && (
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
            {t('compatibility.cross-link.intro.mbti', { code })}
          </p>
          <ul className='flex flex-wrap gap-2'>
            {compatTypes.map((other) => (
              <li key={other}>
                <Link
                  href={localeHref(`/mbti/compatibility/${compatPairSlug(code, other)}`)}
                  className='inline-flex items-center rounded-[2px] border border-oxide-900 px-3 py-1.5 font-display text-sm tracking-[0.04em] text-cream-200 transition-all duration-150 ease-out hover:border-gold-500 hover:bg-gold-500/5 hover:text-gold-400 focus-visible:border-gold-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
                >
                  {other}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className='mt-10 flex flex-col gap-3'>
          <Link
            href={localeHref('/mbti')}
            className='w-full cursor-pointer rounded-[2px] border border-oxide-800 bg-transparent px-6 py-4 text-center font-display text-[15px] tracking-[0.05em] text-gold-500
                       transition-all duration-200 ease-out
                       hover:border-gold-500 hover:bg-gold-500/5 active:scale-[0.985]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
          >
            {t('wiki.detail.take-test.mbti')}
          </Link>

          <Link
            href={localeHref('/mbti/types')}
            className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500
                       transition-colors duration-200 ease-out
                       hover:text-cream-200
                       focus-visible:text-cream-200 focus-visible:outline-none'
          >
            {t('wiki.detail.back.mbti')}
          </Link>

          <Link
            href={localeHref('/')}
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
