import { useEffect, useRef, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/** True when animations should be skipped entirely. */
function shouldSkipAnimation() {
  if (typeof window === 'undefined') return true
  if (typeof window.IntersectionObserver === 'undefined') return true
  return Boolean(window.matchMedia?.(REDUCED_MOTION_QUERY).matches)
}

/**
 * Reveal an element once it enters the viewport.
 *
 *   const [ref, visible] = useReveal()
 *   <div ref={ref} className={visible ? 'is-visible' : ''} />
 *
 * The element is observed once, then unobserved (no repeat animations).
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  // If animations are skipped, start visible so content is never hidden.
  const [visible, setVisible] = useState(shouldSkipAnimation)

  useEffect(() => {
    if (visible) return undefined
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible, threshold, rootMargin])

  return [ref, visible]
}