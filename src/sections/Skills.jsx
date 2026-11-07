import { skillCategories } from '../data/skills'
import { useLanguage } from '../hooks/useLanguage'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

export function Skills() {
  const { t, tr } = useLanguage()

  return (
    <section
      id="skills"
      className="section section--alt"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <SectionHeader
          id="skills-title"
          eyebrow={t('skills.eyebrow')}
          title={t('skills.title')}
          intro={t('skills.intro')}
        />

        <ul className="skills__grid">
          {skillCategories.map((category, index) => (
            <Reveal
              as="li"
              key={category.id}
              delay={index * 70}
              className="skill-card"
            >
              <div className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={category.icon} size={20} />
                </span>
                <h3 className="skill-card__title">{tr(category.title)}</h3>
              </div>
              <p className="skill-card__summary">{tr(category.summary)}</p>
              <ul className="tag-list" aria-label={tr(category.title)}>
                {category.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}