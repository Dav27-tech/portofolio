import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { Icon } from './Icon'

/**
 * Light/dark theme toggle. Both icons are rendered and cross-faded in CSS
 * so the switch animates smoothly (disabled under prefers-reduced-motion).
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'
  const label = isDark ? t('a11y.switchToLight') : t('a11y.switchToDark')

  return (
    <button
      type="button"
      className={`icon-button theme-toggle ${isDark ? 'is-dark' : ''}`.trim()}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <Icon name="sun" size={18} className="theme-toggle__sun" />
      <Icon name="moon" size={18} className="theme-toggle__moon" />
    </button>
  )
}