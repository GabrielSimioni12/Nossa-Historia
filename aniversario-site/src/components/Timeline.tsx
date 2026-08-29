import { timeline, TimelineEvent } from '../data/timeline'
import { useScrollReveal } from '../hooks/useScrollReveal'

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useScrollReveal<HTMLLIElement>(0.25)
  const side = index % 2 === 0 ? 'left' : 'right'

  return (
    <li ref={ref} className={`timeline__item timeline__item--${side}`}>
      <div className="timeline__connector" aria-hidden="true">
        <span className="timeline__star" />
        <span className="timeline__line" />
      </div>

      <div className="timeline__card">
        <img
          className="timeline__photo"
          src={event.photo}
          alt={event.title}
          loading="lazy"
        />
        <div className="timeline__text">
          <span className="timeline__date">{event.date}</span>
          <h3 className="timeline__title">{event.title}</h3>
          <p className="timeline__description">{event.description}</p>
        </div>
      </div>
    </li>
  )
}

export default function Timeline() {
  return (
    <section className="timeline" id="linha-do-tempo">
      <header className="timeline__header">
        <span className="section-eyebrow">nossa constelação</span>
        <h2 className="section-title">Cada capítulo, uma estrela</h2>
      </header>

      <ol className="timeline__list">
        {timeline.map((event, i) => (
          <TimelineItem key={event.id} event={event} index={i} />
        ))}
      </ol>
    </section>
  )
}
