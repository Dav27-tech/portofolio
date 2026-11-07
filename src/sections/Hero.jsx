import { profile } from '../data/profile'
import { useLanguage } from '../hooks/useLanguage'
import { Icon } from '../components/Icon'
import { ProfilePhoto } from '../components/ProfilePhoto'
import { NeuralNetwork } from '../components/NeuralNetwork'
import { Reveal } from '../components/Reveal'
import { SocialLinks } from '../components/SocialLinks'
import { useTypingEffect } from '../hooks/useTypingEffect'

const TYPING_PHRASES = {
  fr: [
    'Développeur Full-Stack',
    'Développeur Web',
    'Développeur Mobile',
    'Étudiant en Génie Logiciel',
  ],
  en: [
    'Full-Stack Developer',
    'Web Developer',
    'Mobile Developer',
    'Software Engineering Student',
  ],
}

export function Hero() {
  const { t, tr, lang } = useLanguage()
  const typedText = useTypingEffect(TYPING_PHRASES, lang)
  const longestPhrase = TYPING_PHRASES[lang].reduce((longest, phrase) =>
    phrase.length > longest.length ? phrase : longest,
  )

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <NeuralNetwork />
      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal delay={60}>
            <p className="hero__greeting">{t('hero.greeting')}</p>
            <h1 id="hero-title" className="hero__name">
              {profile.name}
            </h1>
            <p className="hero__title">{tr(profile.title)}</p>
          </Reveal>

          <Reveal delay={120}>
            <p className="hero__headline">
              <span aria-hidden="true">{t('hero.typingPrefix')}</span>{' '}
              <span className="hero__typing" aria-hidden="true">
                <span className="hero__typing-sizer" aria-hidden="true">
                  {longestPhrase}
                </span>
                <span className="hero__typing-text" aria-hidden="true">
                  {typedText}
                </span>
                <span className="hero__typing-cursor" aria-hidden="true" />
              </span>
              <span className="visually-hidden">
                {t('hero.typingPrefix')} {tr(profile.title)}
              </span>
            </p>
            <p className="hero__intro">{tr(profile.intro)}</p>
          </Reveal>

          <Reveal delay={180} className="hero__actions">
            <a href="#projects" className="button button--primary">
              {t('hero.ctaProjects')}
              <Icon name="arrow-right" size={18} />
            </a>
            <a href="#contact" className="button button--secondary">
              {t('hero.ctaContact')}
            </a>
          </Reveal>

          <Reveal delay={240}>
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={120} className="hero__media">
          <ProfilePhoto />
        </Reveal>
      </div>
    </section>
  )
}
