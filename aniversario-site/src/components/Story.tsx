import { useEffect, useRef, useState } from 'react'
import { storySlides } from '../data/story'
import { IconBack, IconPlay, IconPause, IconMusic } from './icons'
import '../styles/Story.css'

interface StoryProps {
  open: boolean
  onClose: () => void
}

function isVideo(path: string) {
  return path.toLowerCase().endsWith('.mp4')
}

const INTRO_MESSAGE = `Você, apesar de ser uma menina bem reservada, sempre adorou postar foto com seu namorado. Por outro lado, eu nunca gostei muito. No entanto, eu fiz algo para mostrar o quanto eu te amo: agora você tem um lugar especial para sempre revisar os nossos stories exclusivos. Escolhi algumas das nossas melhores fotos, com músicas que marcaram o nosso relacionamento de alguma forma.`

export default function Story({ open, onClose }: StoryProps) {
  const [phase, setPhase] = useState<'intro' | 'playing'>('intro')
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const slide = storySlides[index]
  const isLast = index === storySlides.length - 1
  const video = isVideo(slide.photo)

  useEffect(() => {
    if (open) {
      setPhase('intro')
      setIndex(0)
      setProgress(0)
      setPaused(false)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open || phase !== 'playing') return
    setProgress(0)
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = 0
      audio.play().catch((err) => {
        console.error('[story] autoplay bloqueado, use o botão de play:', err)
      })
    }
  }, [index, open, phase])

  useEffect(() => {
    if (!open || phase !== 'playing' || paused) return
    const stepMs = 50
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + (stepMs / (slide.duration * 1000)) * 100
        if (next >= 100) {
          goNext()
          return 100
        }
        return next
      })
    }, stepMs)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, phase, paused, index, slide.duration])

  useEffect(() => {
    if (!open && audioRef.current) {
      audioRef.current.pause()
    }
  }, [open])

  if (!open) return null

  function goNext() {
    if (isLast) {
      onClose()
      return
    }
    setIndex((i) => Math.min(storySlides.length - 1, i + 1))
  }

  function goPrev() {
    setIndex((i) => Math.max(0, i - 1))
  }

  function togglePaused() {
    setPaused((p) => {
      const next = !p
      const audio = audioRef.current
      if (audio) {
        if (next) {
          audio.pause()
        } else {
          audio.play().catch((err) => {
            console.error('[story] erro ao tentar tocar o áudio:', err)
          })
        }
      }
      return next
    })
  }

  if (phase === 'intro') {
    return (
      <div className="story-overlay story-overlay--intro" role="dialog" aria-modal="true">
        <div className="story-intro">
          <p className="story-intro__text">{INTRO_MESSAGE}</p>
          <button className="story-intro__button" onClick={() => setPhase('playing')}>
            continuar
          </button>
          <button className="story-intro__skip" onClick={onClose}>
            voltar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="story-overlay" role="dialog" aria-modal="true">
      <div className="story-overlay__bars">
        {storySlides.map((s, i) => (
          <div className="story-overlay__bar" key={s.id}>
            <div
              className="story-overlay__bar-fill"
              style={{
                width: i < index ? '100%' : i === index ? `${progress}%` : '0%',
              }}
            />
          </div>
        ))}
      </div>

      <div className="story-overlay__header">
        <button className="story-overlay__back" onClick={onClose}>
          <IconBack /> Voltar ao início
        </button>
        <div className="story-overlay__actions">
          <button
            className="story-overlay__icon-btn"
            onClick={togglePaused}
            aria-label={paused ? 'Continuar' : 'Pausar'}
          >
            {paused ? <IconPlay /> : <IconPause />}
          </button>
        </div>
      </div>

      <div className="story-overlay__media">
        {video ? (
          <>
            <video className="story-overlay__bg" src={slide.photo} autoPlay loop muted playsInline aria-hidden="true" />
            <video key={slide.photo} className="story-overlay__photo" src={slide.photo} autoPlay loop muted playsInline />
          </>
        ) : (
          <>
            <img className="story-overlay__bg" src={slide.photo} alt="" aria-hidden="true" />
            <img key={slide.photo} className="story-overlay__photo" src={slide.photo} alt={slide.caption} />
          </>
        )}
      </div>

      <div className="story-overlay__bottom">
        <span className="story-overlay__music">
          <IconMusic /> {slide.music.title} · {slide.music.artist}
        </span>
      </div>

      <button className="story-overlay__zone story-overlay__zone--prev" onClick={goPrev} aria-label="Momento anterior" />
      <button className="story-overlay__zone story-overlay__zone--next" onClick={goNext} aria-label="Próximo momento" />

      <audio ref={audioRef} src={slide.music.src} />
    </div>
  )
}