'use client'

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
} from '../../languages.constants'
import { type Language } from '../../languages.types'

import { isLanguage, readBrowserLanguage, readQueryLanguage } from './utils'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageCtx = createContext<LanguageContextValue | undefined>(undefined)

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    const query = readQueryLanguage()
    if (query) {
      setLanguageState(query)
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, query)
      return
    }
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (isLanguage(stored)) {
      setLanguageState(stored)
      return
    }
    const browser = readBrowserLanguage()
    if (browser) setLanguageState(browser)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next)
  }, [])

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  )

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>
}

export const useLanguageContext = (): LanguageContextValue => {
  const ctx = useContext(LanguageCtx)
  if (ctx === undefined) {
    throw new Error('useLanguageContext must be used within LanguageProvider')
  }
  return ctx
}
