import { useEffect, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/** Types and erases localized phrases, or returns a stable phrase for reduced motion. */
export function useTypingEffect(phrases, language) {
  const [typed, setTyped] = useState({ language: '', text: '' })
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia?.(REDUCED_MOTION_QUERY).matches,
  )

  useEffect(() => {
    const media = window.matchMedia?.(REDUCED_MOTION_QUERY)
    if (!media) return undefined

    const updatePreference = (event) => setReducedMotion(event.matches)
    media.addEventListener('change', updatePreference)
    return () => media.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const entries = phrases[language] ?? phrases.fr ?? []
    if (entries.length === 0) return undefined

    if (reducedMotion) return undefined

    let phraseIndex = 0
    let characterIndex = 0
    let deleting = false
    let timeout
    const tick = () => {
      const phrase = entries[phraseIndex]

      if (!deleting) {
        characterIndex += 1
        setTyped({ language, text: phrase.slice(0, characterIndex) })
        if (characterIndex === phrase.length) {
          deleting = true
          timeout = window.setTimeout(tick, 1500)
          return
        }
      } else {
        characterIndex -= 1
        setTyped({ language, text: phrase.slice(0, characterIndex) })
        if (characterIndex === 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % entries.length
          timeout = window.setTimeout(tick, 350)
          return
        }
      }

      timeout = window.setTimeout(tick, deleting ? 38 : 78)
    }

    timeout = window.setTimeout(tick, 250)
    return () => window.clearTimeout(timeout)
  }, [phrases, language, reducedMotion])

  const entries = phrases[language] ?? phrases.fr ?? []
  if (reducedMotion) return entries[0] ?? ''
  return typed.language === language ? typed.text : ''
}
