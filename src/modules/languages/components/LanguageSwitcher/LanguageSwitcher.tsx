'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { type TranslationKey } from '@/translations/translation.types'

import { useTranslate } from '../../hooks/use-translate'
import { LANGUAGES } from '../../languages.constants'
import { useLanguageContext } from '../../stores/language-store'
import { withLocale } from '../../utils/locale-path'

const TOGGLE_CLASSES =
  'flex cursor-pointer items-center gap-2 rounded-[2px] border border-oxide-800 bg-ink-800/60 px-3 py-2 font-display text-xs font-medium uppercase tracking-[0.15em] text-gold-500 backdrop-blur-sm ' +
  'transition-all duration-200 ease-out ' +
  'hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-400 ' +
  'active:scale-[0.985] ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'

const ITEM_BASE_CLASSES =
  'flex w-full cursor-pointer items-center justify-between gap-4 px-3 py-2 text-left font-display text-xs font-medium uppercase tracking-[0.15em] ' +
  'transition-colors duration-150 ease-out ' +
  'focus-visible:outline-none'

const ITEM_SELECTED_CLASSES = 'bg-gold-500/10 text-gold-400'
const ITEM_IDLE_CLASSES =
  'text-warm-gray-300 hover:bg-gold-500/5 hover:text-gold-500 focus-visible:bg-gold-500/5 focus-visible:text-gold-500'

export const LanguageSwitcher = () => {
  const t = useTranslate()
  const { language } = useLanguageContext()
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  const handleToggle = () => setOpen((prev) => !prev)

  const currentLabel = t(`language.${language}` as TranslationKey)

  return (
    <div ref={containerRef} className='fixed top-4 right-4 z-10'>
      <button
        ref={toggleRef}
        type='button'
        onClick={handleToggle}
        aria-label={t('language.switcher.aria-label', { current: currentLabel })}
        aria-haspopup='listbox'
        aria-expanded={open}
        className={TOGGLE_CLASSES}
      >
        <span>{language.toUpperCase()}</span>
        <span
          aria-hidden='true'
          className={`text-[10px] transition-transform duration-200 ease-out ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <ul
          role='listbox'
          className='animate-fade-in absolute right-0 top-full mt-1 flex min-w-36 flex-col overflow-hidden rounded-[2px] border border-oxide-800 bg-ink-800/95 shadow-lg backdrop-blur-sm'
        >
          {LANGUAGES.map((code) => {
            const isSelected = code === language
            const label = t(`language.${code}` as TranslationKey)

            return (
              <li key={code} role='option' aria-selected={isSelected}>
                <Link
                  href={withLocale(pathname, code)}
                  hrefLang={code}
                  onClick={() => setOpen(false)}
                  className={`${ITEM_BASE_CLASSES} ${isSelected ? ITEM_SELECTED_CLASSES : ITEM_IDLE_CLASSES}`}
                >
                  <span>{code.toUpperCase()}</span>
                  <span
                    className={`text-[10px] normal-case tracking-normal ${
                      isSelected ? 'text-gold-400' : 'text-warm-gray-500'
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
