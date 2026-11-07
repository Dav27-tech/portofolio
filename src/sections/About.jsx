import { profile } from '../data/profile'
import { useLanguage } from '../hooks/useLanguage'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

export function About() {
  const { t, tr } = useLanguage()
  const paragraphs = tr(profile.about) || []

  const facts = [
    {
      icon: 'graduation',
      label: t('about.education'),
      value: 'Génie Logiciel · ISIG Goma',
    },
    { icon: 'map-pin', label: t('about.location'), value: tr(profile.location) },
    {
      icon: 'globe',
      label: t('about.languages'),
      value: profile.spokenLanguages.map((l) => tr(l)).join(', '),
    },
    { icon: 'layers', label: t('about.focus'), value: t('about.focusValue') },
  ]

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          id="about-title"
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
        />

        <div className="about__grid">
          <Reveal className="about__text">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="dl" delay={100} className="facts">
            {facts.map((fact) => (
              <div key={fact.icon} className="facts__item">
                <dt className="facts__label">
                  <Icon name={fact.icon} size={16} />
                  {fact.label}
                </dt>
                <dd className="facts__value">{fact.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}