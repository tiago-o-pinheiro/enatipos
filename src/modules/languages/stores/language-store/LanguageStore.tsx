'use client'

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
} from 'react'

import { type Language } from '../../languages.types'

type LanguageContextValue = {
  language: Language
}

const LanguageCtx = createContext<LanguageContextValue | undefined>(undefined)

type LanguageProviderProps = PropsWithChildren<{
  language: Language
}>

export const LanguageProvider = ({
  language,
  children,
}: LanguageProviderProps) => {
  const value = useMemo(() => ({ language }), [language])
  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>
}

export const useLanguageContext = (): LanguageContextValue => {
  const ctx = useContext(LanguageCtx)
  if (ctx === undefined) {
    throw new Error('useLanguageContext must be used within LanguageProvider')
  }
  return ctx
}
