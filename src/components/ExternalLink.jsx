import { useLanguage } from '../hooks/useLanguage'

/**
 * Safe external link: opens in a new tab with rel="noopener noreferrer"
 * and announces the new-tab behavior to screen readers.
 */
export function ExternalLink({ href, children, className = '', ...rest }) {
  const { t } = useLanguage()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
      <span className="visually-hidden"> {t('a11y.opensNewTab')}</span>
    </a>
  )
}