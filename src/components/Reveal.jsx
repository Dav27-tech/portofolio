import { useReveal } from '../hooks/useReveal'

/**
 * Fades and lifts its content into view when it enters the viewport.
 *
 *   <Reveal as="li" delay={120}>...</Reveal>
 *
 * Respects prefers-reduced-motion (content is shown immediately).
 */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}