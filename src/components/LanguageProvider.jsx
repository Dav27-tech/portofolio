import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from '../hooks/contexts'
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  translations,
} from '../data/translations'

const STORAGE_KEY = 'portfolio-language'
const SUPPORTED = LANGUAGES.map((l) => l.code)

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && SUPPORTED.includes(saved)) return saved
  } catch {
    // localStorage unavailable (private mode, etc.): use the default.
  }
  return DEFAULT_LANGUAGE
}

function setMeta(selector, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute('content', value)
}

/** Resolve a dotted key such as 'nav.about' inside an object. */
function resolve(obj, key) {
  return key
    .split('.')
    .reduce((acc, part) => (acc == null ? undefined : acc[part]), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage)

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore storage errors; the language still works for this session.
    }

    const meta = translations[lang].meta
    document.documentElement.lang = lang
    document.title = meta.title
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:locale"]', lang === 'fr' ? 'fr_FR' : 'en_US')
  }, [lang])

  /** Interface string lookup; falls back to the default language, then the key. */
  const t = useCallback(
    (key) =>
      resolve(translations[lang], key) ??
      resolve(translations[DEFAULT_LANGUAGE], key) ??
      key,
    [lang],
  )

  /** Localize a data value: { fr, en } object, or plain string unchanged. */
  const tr = useCallback(
    (value) => {
      if (value == null) return ''
      if (typeof value === 'object' && !Array.isArray(value)) {
        return value[lang] ?? value[DEFAULT_LANGUAGE] ?? ''
      }
      return value
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, setLang, t, tr, languages: LANGUAGES }),
    [lang, setLang, t, tr],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}