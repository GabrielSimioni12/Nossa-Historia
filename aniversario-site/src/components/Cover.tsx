import { useEffect, useState } from 'react'
import { siteConfig } from '../data/config'

interface CoverProps {
  onOpen: () => void
  opened: boolean
}

export default function Cover({ onOpen, opened }: CoverProps) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (!opened) return
    let i = 0
    const full = siteConfig.openingLine
    const id = setInterval(() => {
      i++
      setTyped(full.slice(0, i))
      if (i >= full.length) clearInterval(id)
    }, 45)
    return () => clearInterval(id)
  }, [opened])

  return (
    <section className={`cover ${opened ? 'cover--opened' : ''}`}>
      <div className="cover__eyebrow">para</div>
      <h1 className="cover__name">{siteConfig.girlfriendName}</h1>

      {!opened ? (
        <button className="cover__button" onClick={onOpen}>
          abrir nossa história
        </button>
      ) : (
        <p className="cover__typed">
          {typed}
          <span className="cover__cursor" aria-hidden="true" />
        </p>
      )}

      <div className="cover__scroll-hint" aria-hidden="true">
        role para começar
      </div>
    </section>
  )
}
