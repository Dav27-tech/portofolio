import { useLanguage } from '../hooks/useLanguage'
import { ExternalLink } from './ExternalLink'
import { Icon } from './Icon'

/**
 * Project card. Every field comes from src/data/projects.js.
 * Empty links are hidden; a missing image shows a clean placeholder.
 */
export function ProjectCard({ project, index }) {
  const { t, tr } = useLanguage()
  const name = tr(project.name)
  const number = String(index + 1).padStart(2, '0')
  const hasLinks = Boolean(project.repoUrl || project.demoUrl)

  return (
    <article
      className="project-card"
      aria-labelledby={`project-${project.id}`}
    >
      <div className="project-card__media">
        {project.image ? (
          <img
            src={project.image}
            alt={`${name}: ${tr(project.type)}`}
            loading="lazy"
            decoding="async"
            width="800"
            height="500"
          />
        ) : (
          <div
            className="project-card__placeholder"
            role="img"
            aria-label={`${name}: ${t('a11y.screenshotPlaceholder')}`}
          >
            <span className="project-card__monogram" aria-hidden="true">
              {name.charAt(0)}
            </span>
            <span className="project-card__placeholder-note" aria-hidden="true">
              <Icon name="image" size={14} />
              {t('a11y.screenshotPlaceholder')}
            </span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__number" aria-hidden="true">
            {number}
          </span>
          <span className="project-card__type">{tr(project.type)}</span>
        </div>

        <h3 id={`project-${project.id}`} className="project-card__title">
          {name}
        </h3>

        <p className="project-card__description">{tr(project.description)}</p>

        {project.tech.length > 0 ? (
          <ul className="tag-list" aria-label="Technologies">
            {project.tech.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        ) : (
          <p className="project-card__muted">{t('projects.noTech')}</p>
        )}

        {hasLinks && (
          <div className="project-card__links">
            {project.repoUrl && (
              <ExternalLink href={project.repoUrl} className="text-link">
                <Icon name="code" size={16} />
                {t('projects.code')}
              </ExternalLink>
            )}
            {project.demoUrl && (
              <ExternalLink href={project.demoUrl} className="text-link">
                <Icon name="external" size={16} />
                {t('projects.demo')}
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
