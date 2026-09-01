import { galleryItems } from '../data/gallery'
import '../styles/Gallery.css'

function isVideo(path: string) {
  return path.toLowerCase().endsWith('.mp4')
}

export default function Gallery() {
  // duplica a lista pra o loop ficar contínuo, sem "salto" no final
  const loopItems = [...galleryItems, ...galleryItems]

  return (
    <section className="gallery" id="galeria">
      <header className="gallery__header">
        <span className="section-eyebrow">o álbum</span>
        <h2 className="section-title">Sessão Fotinhas Zuadas</h2>
      </header>

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
    </section>
  )
}