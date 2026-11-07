import { projects } from '../data/projects'
import { getSocial } from '../data/socials'
import { useLanguage } from '../hooks/useLanguage'
import { ExternalLink } from '../components/ExternalLink'
import { Icon } from '../components/Icon'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

export function Projects() {
  const { t } = useLanguage()
  const github = getSocial('github')

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          id="projects-title"
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          intro={t('projects.intro')}
        />

        <ul className="projects__grid">
          {projects.map((project, index) => (
            <Reveal
              as="li"
              key={project.id}
              delay={(index % 2) * 80}
              className="projects__item"
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </ul>

        {github && (
          <Reveal className="projects__more">
            <ExternalLink href={github.url} className="button button--secondary">
              <Icon name="github" size={18} />
              {t('projects.moreOnGithub')}
            </ExternalLink>
          </Reveal>
        )}
      </div>
    </section>
  )
}