import { useState } from 'react'
import { galleryItems } from '../data/gallery'
import { IconEye, IconEyeOff } from './icons'
import '../styles/Gallery.css'

function isVideo(path: string) {
  return path.toLowerCase().endsWith('.mp4')
}

export default function Gallery() {
  const [visible, setVisible] = useState(false)

  // duplica a lista pra o loop ficar contínuo, sem "salto" no final
  const loopItems = [...galleryItems, ...galleryItems]

  return (
    <section className="gallery" id="galeria">
      <header className="gallery__header">
        <span className="section-eyebrow">o álbum</span>
        <h2 className="section-title">Sessão de Fotinhas Zoadas</h2>

        <button
          className="gallery__toggle"
          onClick={() => setVisible((v) => !v)}
          aria-pressed={visible}
        >
          {visible ? <IconEyeOff /> : <IconEye />}
          {visible ? 'Ocultar fotos' : 'Mostrar fotos'}
        </button>
      </header>

      {visible ? (
        <div className="gallery__track-wrapper">
          <div className="gallery__track">
            {loopItems.map((item, i) => (
              <div className="gallery__card" key={`${item.id}-${i}`}>
                {isVideo(item.src) ? (
                  <>
                    <video className="gallery__bg" src={item.src} autoPlay loop muted playsInline aria-hidden="true" />
                    <video className="gallery__photo" src={item.src} autoPlay loop muted playsInline />
                  </>
                ) : (
                  <>
                    <img className="gallery__bg" src={item.src} alt="" aria-hidden="true" />
                    <img className="gallery__photo" src={item.src} alt="" loading="lazy" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="gallery__placeholder">
          <IconEyeOff />
          <span>fotos reservadas — toque em "mostrar fotos" pra ver</span>
        </div>
      )}
    </section>
  )
}