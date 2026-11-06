import { profile } from '../data/profile'
import { useLanguage } from '../hooks/useLanguage'
import { Icon } from './Icon'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__text">
          <p className="site-footer__copy">
            © {year} {profile.name}. {t('footer.rights')}
          </p>
          <p className="site-footer__built">{t('footer.built')}</p>
        </div>

        <div className="site-footer__actions">
          <SocialLinks />
          <a
            href="#top"
            className="icon-button"
            aria-label={t('a11y.backToTop')}
            title={t('a11y.backToTop')}
          >
            <Icon name="arrow-up" size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}