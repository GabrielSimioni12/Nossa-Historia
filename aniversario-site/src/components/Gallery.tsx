import { timeline } from '../data/timeline'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ─────────────────────────────────────────────────────────
// EDITE AQUI: pode trocar por uma lista própria de fotos
// (não precisa ser a mesma da linha do tempo).
// ─────────────────────────────────────────────────────────
const galleryPhotos = timeline.map((e) => ({ src: e.photo, alt: e.title }))

export default function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>(0.1)

  return (
    <section className="gallery" id="galeria">
      <header className="gallery__header">
        <span className="section-eyebrow">o álbum</span>
        <h2 className="section-title">Alguns momentos nossos</h2>
      </header>

      <div ref={ref} className="gallery__grid">
        {galleryPhotos.map((photo, i) => (
          <figure className="gallery__item" key={i} style={{ ['--i' as string]: i }}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}
