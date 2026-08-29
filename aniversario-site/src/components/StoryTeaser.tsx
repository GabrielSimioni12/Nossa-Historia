import '../styles/StoryTeaser.css'

interface StoryTeaserProps {
  onOpen: () => void
}

export default function StoryTeaser({ onOpen }: StoryTeaserProps) {
  return (
    <section className="story-teaser" id="story">
      <button
        className="story-teaser__button"
        onClick={onOpen}
        aria-label="Abrir nossa história em tela cheia"
      >
        <span className="story-teaser__ring" aria-hidden="true">
          <span className="story-teaser__play">▶</span>
        </span>

        <span className="story-teaser__label">
          Assistir nossa história
        </span>
      </button>
    </section>
  )
}