import { useEffect, useRef } from 'react'

/**
 * Canvas de estrelas piscando, fixo atrás de todo o conteúdo.
 * Leve: usa poucas partículas e para de desenhar se a aba não está visível.
 */
export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let stars: { x: number; y: number; r: number; phase: number; speed: number }[] = []

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      const count = Math.floor((width * height) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.005,
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    let running = true

    const draw = (t: number) => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)
      for (const s of stars) {
        const twinkle = prefersReduced ? 1 : 0.5 + 0.5 * Math.sin(t * s.speed + s.phase)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 196, 104, ${0.15 + twinkle * 0.55})`
        ctx.fill()
      }
      raf = prefersReduced ? 0 : requestAnimationFrame(draw)
    }

    if (prefersReduced) {
      draw(0)
    } else {
      raf = requestAnimationFrame(draw)
    }

    const onVisibility = () => {
      running = document.visibilityState === 'visible'
      if (running && !prefersReduced) raf = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="stars-background" aria-hidden="true" />
}
