'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useLocaleHref } from '@/modules/languages/hooks/use-locale-href'
import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import { type EnneatypeId } from '../../enneatypes.types'

type CompatibilityViewProps = {
  a: EnneatypeId
  b: EnneatypeId
}

type SectionKey = 'dynamic' | 'friction' | 'together' | 'practice'
const SECTIONS: readonly SectionKey[] = [
  'dynamic',
  'friction',
  'together',
  'practice',
]

export const CompatibilityView = ({ a, b }: CompatibilityViewProps) => {
  const t = useTranslate()
  const localeHref = useLocaleHref()
  const pair = `${a}-${b}`

  const aName = t(`enneatype.${a}.name` as TranslationKey)
  const bName = t(`enneatype.${b}.name` as TranslationKey)

  const sections = SECTIONS.map((section) => {
    const key = `compatibility.enneagram.${pair}.${section}` as TranslationKey
    const value = t(key)
    return { section, body: value === key ? null : value }
  })
  const allEmpty = sections.every((s) => s.body === null)

  const aHref = localeHref(`/enneagram/types/${a}`)

  return (
    <main className='mx-auto max-w-xl px-5 pt-6 pb-10'>
      <section className='animate-fade-in'>
        <p className='mb-4 pt-5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
          {t('compatibility.title')}
        </p>

        <div className='mb-6 flex items-center justify-between gap-3'>
          <div className='flex flex-1 flex-col items-center gap-2'>
            <Image
              src={`/images/enneagram/${a}.png`}
              alt={`${a} — ${aName}`}
              width={1024}
              height={1024}
              priority
              className='h-auto w-full max-w-[140px]'
            />
            <span className='font-display text-[clamp(48px,12vw,72px)] font-light leading-none tracking-[-0.04em] text-gold-400'>
              {a}
            </span>
            <span className='text-center font-display text-sm italic text-warm-gray-500'>
              {aName}
            </span>
          </div>

          <span
            aria-hidden='true'
            className='font-display text-[clamp(40px,12vw,64px)] font-light text-gold-500'
          >
            ×
          </span>

          <div className='flex flex-1 flex-col items-center gap-2'>
            <Image
              src={`/images/enneagram/${b}.png`}
              alt={`${b} — ${bName}`}
              width={1024}
              height={1024}
              priority
              className='h-auto w-full max-w-[140px]'
            />
            <span className='font-display text-[clamp(48px,12vw,72px)] font-light leading-none tracking-[-0.04em] text-gold-400'>
              {b}
            </span>
            <span className='text-center font-display text-sm italic text-warm-gray-500'>
              {bName}
            </span>
          </div>
        </div>

        {allEmpty ? (
          <p className='mt-8 rounded-[2px] border border-oxide-900 bg-transparent px-5 py-6 text-center text-base leading-[1.6] text-warm-gray-300'>
            {t('compatibility.placeholder')}
          </p>
        ) : (
          sections.map(({ section, body }) =>
            body === null ? null : (
              <section key={section} className='mt-6'>
                <p className='mb-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-gold-500'>
                  {t(`compatibility.section.${section}` as TranslationKey)}
                </p>
                <p className='text-base leading-[1.6] text-cream-200'>{body}</p>
              </section>
            ),
          )
        )}

        <div className='mt-10 flex flex-col gap-3'>
          <Link
            href={localeHref('/enneagram')}
            className='w-full cursor-pointer rounded-[2px] border border-oxide-800 bg-transparent px-6 py-4 text-center font-display text-[15px] tracking-[0.05em] text-gold-500
                       transition-all duration-200 ease-out
                       hover:border-gold-500 hover:bg-gold-500/5 active:scale-[0.985]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
          >
            {t('wiki.detail.take-test.enneagram')}
          </Link>

          <Link
            href={aHref}
            className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500
                       transition-colors duration-200 ease-out
                       hover:text-cream-200
                       focus-visible:text-cream-200 focus-visible:outline-none'
          >
            {t('compatibility.back.enneagram', { type: a })}
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
