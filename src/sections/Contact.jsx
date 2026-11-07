import { email, getSocial } from '../data/socials'
import { useLanguage } from '../hooks/useLanguage'
import { ExternalLink } from '../components/ExternalLink'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { SocialLinks } from '../components/SocialLinks'

export function Contact() {
  const { t } = useLanguage()
  const whatsapp = getSocial('whatsapp')

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__intro">
            <SectionHeader
              id="contact-title"
              eyebrow={t('contact.eyebrow')}
              title={t('contact.title')}
              intro={t('contact.intro')}
            />

            <Reveal delay={80} className="contact__actions">
              {whatsapp && (
                <ExternalLink
                  href={whatsapp.url}
                  className="button button--primary"
                >
                  <Icon name="whatsapp" size={18} />
                  {t('contact.whatsappCta')}
                </ExternalLink>
              )}
              {email && (
                <a href={`mailto:${email}`} className="button button--secondary">
                  <Icon name="mail" size={18} />
                  {t('contact.emailCta')}
                </a>
              )}
            </Reveal>
            {whatsapp && (
              <Reveal delay={120}>
                <p className="contact__note">{t('contact.whatsappNote')}</p>
              </Reveal>
            )}
          </div>

          <Reveal delay={120} className="contact__panel">
            <p className="contact__panel-title">{t('contact.elsewhere')}</p>
            <SocialLinks variant="labeled" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}