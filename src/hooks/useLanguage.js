import { useContext } from 'react'
import { LanguageContext } from './contexts'

/**
 * Access the current language and translation helpers.
 *
 *   const { lang, setLang, t, tr } = useLanguage()
 *   t('nav.about')            -> interface string from translations.js
 *   tr({ fr: '...', en: '...' }) -> localized value from data files
 *   tr('Plain string')        -> returned unchanged
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used inside <LanguageProvider>')
  }
  return ctx
}