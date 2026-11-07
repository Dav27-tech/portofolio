import { timeline } from '../data/education'
import { useLanguage } from '../hooks/useLanguage'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

const KIND_ICON = {
  education: 'graduation',
  experience: 'briefcase',
}

export function Journey() {
  const { t, tr } = useLanguage()

  return (
    <section
      id="journey"
      className="section section--alt"
      aria-labelledby="journey-title"
    >
      <div className="container">
        <SectionHeader
          id="journey-title"
          eyebrow={t('journey.eyebrow')}
          title={t('journey.title')}
        />

        <ol className="timeline">
          {timeline.map((entry, index) => {
            const period = tr(entry.period)
            const description = tr(entry.description)

            return (
              <Reveal
                as="li"
                key={entry.id}
                delay={index * 80}
                className="timeline__item"
              >
                <span className="timeline__marker" aria-hidden="true">
                  <Icon name={KIND_ICON[entry.kind] ?? 'layers'} size={16} />
                </span>

                <div className="timeline__content">
                  <div className="timeline__meta">
                    <span className="timeline__kind">
                      {t(`journey.${entry.kind}`)}
                    </span>
                    {period && (
                      <span className="timeline__period">{period}</span>
                    )}
                  </div>
                  <h3 className="timeline__title">{tr(entry.title)}</h3>
                  <p className="timeline__org">{tr(entry.organization)}</p>
                  {description && (
                    <p className="timeline__description">{description}</p>
                  )}
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}