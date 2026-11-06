import { useLanguage } from '../hooks/useLanguage'

/**
 * FR / EN segmented control. Switching updates the whole interface
 * instantly (no reload) and is persisted by LanguageProvider.
 */
export function LanguageSwitcher() {
  const { lang, setLang, languages, t } = useLanguage()
  const activeIndex = Math.max(
    0,
    languages.findIndex((l) => l.code === lang),
  )

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t('a11y.language')}
      style={{
        '--lang-count': languages.length,
        '--lang-index': activeIndex,
      }}
    >
      <span className="lang-switch__indicator" aria-hidden="true" />
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          lang={l.code}
          className={`lang-switch__option ${
            l.code === lang ? 'is-active' : ''
          }`.trim()}
          aria-pressed={l.code === lang}
          aria-label={l.name}
          title={l.name}
          onClick={() => setLang(l.code)}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}