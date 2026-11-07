import { useEffect, useState } from 'react'

/**
 * Track which section is currently in view.
 *
 *   const active = useActiveSection(['about', 'skills', 'projects'])
 *
 * A section counts as active when it crosses a band around the upper-middle
 * part of the viewport, which matches where the reader is looking.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  const key = ids.join('|')

  useEffect(() => {
    if (typeof window.IntersectionObserver === 'undefined') return undefined

    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}