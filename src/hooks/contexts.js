import { createContext } from 'react'

/**
 * Context objects live in their own module so provider components can be
 * hot-reloaded cleanly (eslint-plugin-react-refresh: only-export-components).
 */
export const LanguageContext = createContext(null)
export const ThemeContext = createContext(null)