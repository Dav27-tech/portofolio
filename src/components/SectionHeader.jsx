import { Reveal } from './Reveal'

/**
 * Consistent section heading: small eyebrow label, title, optional intro.
 *
 *   <SectionHeader id="skills-title" eyebrow="Skills" title="..." intro="..." />
 *
 * Pass `id` and reference it with aria-labelledby on the parent <section>.
 */
export function SectionHeader({ id, eyebrow, title, intro, align = 'start' }) {
  return (
    <Reveal className={`section-header section-header--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  )
}