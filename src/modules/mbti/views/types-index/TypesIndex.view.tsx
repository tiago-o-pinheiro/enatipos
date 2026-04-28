'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useLocaleHref } from '@/modules/languages/hooks/use-locale-href'
import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import { MBTI_TYPES } from '../../mbti.types'

export const TypesIndexView = () => {
  const t = useTranslate()
  const localeHref = useLocaleHref()

  return (
    <main className='mx-auto max-w-2xl px-5 pt-6 pb-10'>
      <section className='animate-fade-in'>
        <p className='mb-4 pt-5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
          {t('wiki.mbti.index.eyebrow')}
        </p>

        <h1 className='font-display text-[clamp(44px,11vw,64px)] font-normal leading-[0.95] tracking-[-0.03em] text-cream-100'>
          {t('wiki.mbti.index.title')}
        </h1>

        <p className='mt-2 font-display text-xl italic tracking-[-0.01em] text-gold-500'>
          {t('wiki.mbti.index.subtitle')}
        </p>

        <ul className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
          {MBTI_TYPES.map((code) => {
            const name = t(`mbti.type.${code}.name` as TranslationKey)
            return (
              <li key={code}>
                <Link
                  href={localeHref(`/mbti/types/${code}`)}
                  aria-label={`${code} — ${name}`}
                  className='group flex flex-col items-center gap-2 rounded-[2px] border border-oxide-900 bg-transparent p-3 transition-all duration-200 ease-out hover:border-gold-500 hover:bg-gold-500/5 focus-visible:border-gold-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
                >
                  <Image
                    src={`/images/mbti/${code}.png`}
                    alt=''
                    width={1254}
                    height={1254}
                    loading='lazy'
                    className='h-auto w-full'
                  />
                  <span className='font-display text-lg tracking-[0.02em] text-gold-400 transition-colors group-hover:text-gold-300'>
                    {code}
                  </span>
                  <span className='text-center font-display text-[13px] leading-tight text-warm-gray-300'>
                    {name}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

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
            href={localeHref('/')}
            className='inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-[2px] px-6 py-3 font-display text-[13px] uppercase tracking-[0.2em] text-warm-gray-500
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
