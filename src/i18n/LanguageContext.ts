import { createContext } from 'react'
import type { TranslationKey } from './dictionary'

export type Lang = 'ar' | 'en'

export type LanguageValue = {
  lang: Lang
  dir: 'rtl' | 'ltr'
  isArabic: boolean
  setLang: (next: Lang) => void
  toggleLang: () => void
  /** Translate a dictionary key into the active language. */
  t: (key: TranslationKey) => string
  /** Resolve an inline `{ ar, en }` pair, e.g. values from `business`. */
  pick: (value: { ar: string; en: string }) => string
}

export const LanguageContext = createContext<LanguageValue | null>(null)
