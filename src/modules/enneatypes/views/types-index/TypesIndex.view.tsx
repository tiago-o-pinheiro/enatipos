'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useLocaleHref } from '@/modules/languages/hooks/use-locale-href'
import { useTranslate } from '@/modules/languages/hooks/use-translate'
import { type TranslationKey } from '@/translations/translation.types'

import { ENNEATYPE_IDS } from '../../enneatypes.types'

export const TypesIndexView = () => {
  const t = useTranslate()
  const localeHref = useLocaleHref()

  return (
    <main className='mx-auto max-w-2xl px-5 pt-6 pb-10'>
      <section className='animate-fade-in'>
        <p className='mb-4 pt-5 font-display text-[13px] font-medium uppercase tracking-[0.25em] text-gold-500'>
          {t('wiki.enneagram.index.eyebrow')}
        </p>

        <h1 className='font-display text-[clamp(44px,11vw,64px)] font-normal leading-[0.95] tracking-[-0.03em] text-cream-100'>
          {t('wiki.enneagram.index.title')}
        </h1>

        <p className='mt-2 font-display text-xl italic tracking-[-0.01em] text-gold-500'>
          {t('wiki.enneagram.index.subtitle')}
        </p>

        <ul className='mt-10 flex flex-col gap-3'>
          {ENNEATYPE_IDS.map((id) => {
            const name = t(`enneatype.${id}.name` as TranslationKey)
            const subtitle = t(`enneatype.${id}.subtitle` as TranslationKey)
            return (
              <li key={id}>
                <Link
                  href={localeHref(`/enneagram/types/${id}`)}
                  aria-label={`${id} — ${name}`}
                  className='group flex items-center gap-4 rounded-[2px] border border-oxide-900 bg-transparent p-4 transition-all duration-200 ease-out hover:border-gold-500 hover:bg-gold-500/5 focus-visible:border-gold-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'
                >
                  <Image
                    src={`/images/enneagram/${id}.png`}
                    alt=''
                    width={1024}
                    height={1024}
                    loading='lazy'
                    className='h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20'
                  />
                  <span className='font-display text-[clamp(40px,10vw,56px)] font-light leading-[0.85] tracking-[-0.04em] text-gold-400 transition-colors group-hover:text-gold-300'>
                    {id}
                  </span>
                  <span className='flex-1'>
                    <span className='block font-display text-lg leading-[1.15] tracking-[-0.01em] text-cream-100'>
                      {name}
                    </span>
                    <span className='mt-0.5 block font-display text-sm italic text-warm-gray-500'>
                      {subtitle}
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

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
