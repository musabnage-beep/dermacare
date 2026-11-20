import { useContext } from 'react'
import { LanguageContext, type LanguageValue } from './LanguageContext'

export function useLanguage(): LanguageValue {
  const context = useContext(LanguageContext)
  if (context === null) {
    throw new Error('useLanguage must be used inside <LanguageProvider>')
  }
  return context
}
