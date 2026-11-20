import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { business } from '../config/business'
import { dictionary } from './dictionary'
import { LanguageContext, type Lang, type LanguageValue } from './LanguageContext'

const STORAGE_KEY = 'dcb-lang'
const DEFAULT_LANG: Lang = 'ar'

/*
  `?lang=` wins over the stored preference so a shared link always opens in the
  language it was shared in — which is also what makes the `hreflang` pair in
  `SeoHead` point at two genuinely different URLs.
*/
function readInitialLang(): Lang {
  const fromUrl = new URLSearchParams(location.search).get('lang')
  if (fromUrl === 'ar' || fromUrl === 'en') return fromUrl
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'ar' || stored === 'en') return stored
  } catch {
    // localStorage can be unavailable in private modes; fall through.
  }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  // Keep the document in sync so CSS logical properties and screen readers
  // both see the active language.
  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    document.title = `${business.name[lang]} — ${business.descriptor[lang]}`
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Persisting the preference is best-effort.
    }

    // Arabic is the default, so it stays on the bare URL.
    const url = new URL(location.href)
    if (lang === DEFAULT_LANG) url.searchParams.delete('lang')
    else url.searchParams.set('lang', lang)
    if (url.href !== location.href) history.replaceState(null, '', url)
  }, [lang, dir])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((current) => (current === 'ar' ? 'en' : 'ar')),
    [],
  )

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      dir,
      isArabic: lang === 'ar',
      setLang,
      toggleLang,
      t: (key) => dictionary[key][lang],
      pick: (pair) => pair[lang],
    }),
    [lang, dir, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
