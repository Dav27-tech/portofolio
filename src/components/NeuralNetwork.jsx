import { useEffect, useRef } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/** Lightweight, decorative canvas network for the hero background. */
export function NeuralNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = canvas?.parentElement
    const context = canvas?.getContext('2d')
    if (!canvas || !section || !context) return undefined

    const motionPreference = window.matchMedia(REDUCED_MOTION_QUERY)
    const pointer = { x: 0, y: 0, active: false }
    let particles = []
    let width = 0
    let height = 0
    let pixelRatio = 1
    let frameId = 0
    let connectionDistance = 120
    let repulsionRadius = 100
    let palette

    function readPalette() {
      const styles = getComputedStyle(document.documentElement)
      palette = {
        color: styles.getPropertyValue('--network-rgb').trim(),
        lineOpacity: Number(styles.getPropertyValue('--network-line-opacity')),
        particleOpacity: Number(
          styles.getPropertyValue('--network-particle-opacity'),
        ),
      }
    }

    function draw(time, animate) {
      context.clearRect(0, 0, width, height)
      const seconds = time / 1000

      if (animate) {
        for (const particle of particles) {
          const driftX = Math.sin(seconds * 0.32 + particle.phase) * 3
          const driftY = Math.cos(seconds * 0.27 + particle.phase * 1.3) * 3
          let targetX = particle.originX + driftX
          let targetY = particle.originY + driftY

          if (pointer.active) {
            const dx = particle.x - pointer.x
            const dy = particle.y - pointer.y
            const distance = Math.hypot(dx, dy)
            if (distance < repulsionRadius && distance > 0) {
              const force = (1 - distance / repulsionRadius) * 34
              targetX += (dx / distance) * force
              targetY += (dy / distance) * force
            }
          }

          particle.velocityX = (particle.velocityX + (targetX - particle.x) * 0.025) * 0.88
          particle.velocityY = (particle.velocityY + (targetY - particle.y) * 0.025) * 0.88
          particle.x += particle.velocityX
          particle.y += particle.velocityY
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const first = particles[i]
        for (let j = i + 1; j < particles.length; j += 1) {
          const second = particles[j]
          const distance = Math.hypot(first.x - second.x, first.y - second.y)
          if (distance >= connectionDistance) continue

          const opacity =
            (1 - distance / connectionDistance) * palette.lineOpacity
          context.strokeStyle = `rgba(${palette.color}, ${opacity})`
          context.lineWidth = 0.8
          context.beginPath()
          context.moveTo(first.x, first.y)
          context.lineTo(second.x, second.y)
          context.stroke()
        }
      }

      for (const particle of particles) {
        context.beginPath()
        context.arc(particle.x, particle.y, 1.55, 0, Math.PI * 2)
        context.fillStyle = `rgba(${palette.color}, ${palette.particleOpacity})`
        context.fill()
      }

      if (animate) frameId = window.requestAnimationFrame((nextTime) => draw(nextTime, true))
    }

    function start() {
      window.cancelAnimationFrame(frameId)
      readPalette()
      draw(performance.now(), !motionPreference.matches)
    }

    function resize() {
      window.cancelAnimationFrame(frameId)
      const bounds = section.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const compact = width < 700
      const targetCount = Math.round((width * height) / (compact ? 19000 : 11500))
      const count = Math.max(compact ? 14 : 26, Math.min(compact ? 42 : 88, targetCount))
      const columns = Math.ceil(Math.sqrt((count * width) / Math.max(height, 1)))
      const rows = Math.ceil(count / columns)
      const cellWidth = width / columns
      const cellHeight = height / rows
      connectionDistance = compact ? 88 : 124
      repulsionRadius = compact ? 72 : 108

      particles = Array.from({ length: count }, (_, index) => {
        const column = index % columns
        const row = Math.floor(index / columns)
        const x = (column + 0.2 + Math.random() * 0.6) * cellWidth
        const y = (row + 0.2 + Math.random() * 0.6) * cellHeight
        return {
          originX: x,
          originY: y,
          x,
          y,
          velocityX: 0,
          velocityY: 0,
          phase: Math.random() * Math.PI * 2,
        }
      })
      start()
    }

    function handlePointerMove(event) {
      if (event.pointerType === 'touch') {
        pointer.active = false
        return
      }
      const bounds = section.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
      pointer.active =
        pointer.x >= 0 && pointer.x <= width && pointer.y >= 0 && pointer.y <= height
    }

    function clearPointer() {
      pointer.active = false
    }

    function updatePalette() {
      readPalette()
      if (motionPreference.matches) draw(performance.now(), false)
    }

    const resizeObserver = new ResizeObserver(resize)
    const themeObserver = new MutationObserver(updatePalette)
    resizeObserver.observe(section)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    section.addEventListener('pointermove', handlePointerMove, { passive: true })
    section.addEventListener('pointerleave', clearPointer, { passive: true })
    motionPreference.addEventListener('change', start)
    resize()

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      themeObserver.disconnect()
      section.removeEventListener('pointermove', handlePointerMove)
      section.removeEventListener('pointerleave', clearPointer)
      motionPreference.removeEventListener('change', start)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__network" aria-hidden="true" />
}
