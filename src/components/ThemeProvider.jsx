import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../hooks/contexts'

const STORAGE_KEY = 'portfolio-theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

function getStoredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage unavailable: fall back to the OS preference.
  }
  return null
}

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  // `hasPreference` is true once the user explicitly picked a theme.
  const [hasPreference, setHasPreference] = useState(
    () => getStoredTheme() !== null,
  )
  const [theme, setThemeState] = useState(
    () => getStoredTheme() ?? getSystemTheme(),
  )

  // Apply the theme to <html> so CSS custom properties switch.
  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme

    const metaTheme = document.head.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.setAttribute(
        'content',
        getComputedStyle(root).getPropertyValue('--bg').trim(),
      )
    }
  }, [theme])

  // Follow OS changes live while the user has not chosen a theme.
  useEffect(() => {
    if (hasPreference || !window.matchMedia) return undefined
    const mql = window.matchMedia(DARK_QUERY)
    const onChange = (event) => setThemeState(event.matches ? 'dark' : 'light')
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [hasPreference])

  const setTheme = useCallback((next) => {
    if (next !== 'light' && next !== 'dark') return
    setThemeState(next)
    setHasPreference(true)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore storage errors; the theme still applies for this session.
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
