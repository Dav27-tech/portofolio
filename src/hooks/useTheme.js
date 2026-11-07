import { useContext } from 'react'
import { ThemeContext } from './contexts'

/**
 * Access the current theme and toggle.
 *
 *   const { theme, toggleTheme, setTheme } = useTheme()
 *   theme -> 'light' | 'dark'
 */
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used inside <ThemeProvider>')
  }
  return ctx
}