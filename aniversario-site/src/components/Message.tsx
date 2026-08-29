import confetti from 'canvas-confetti'
import { siteConfig } from '../data/config'
import { useTimeTogether } from '../hooks/useTimeTogether'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Counter() {
  const { days, hours, minutes, seconds } = useTimeTogether(siteConfig.relationshipStart)

  const items = [
    { label: 'dias', value: days },
    { label: 'horas', value: hours },
    { label: 'min', value: minutes },
    { label: 'seg', value: seconds },
  ]

  return (
    <div className="counter">
      {items.map((item) => (
        <div className="counter__item" key={item.label}>
          <span className="counter__value">{String(item.value).padStart(2, '0')}</span>
          <span className="counter__label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function launchConfetti() {
  const colors = ['#e8c468', '#f2a9bd', '#f5efe6']
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 },
    colors,
  })
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 70,
    origin: { x: 0, y: 0.7 },
    colors,
  })
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 70,
    origin: { x: 1, y: 0.7 },
    colors,
  })
}

export default function Message() {
  const ref = useScrollReveal<HTMLDivElement>(0.3)

  return (
    <section className="message" id="mensagem">
      <div ref={ref} className="message__content">
        <span className="section-eyebrow">juntos há</span>
        <Counter />

        <p className="message__text">{siteConfig.finalMessage}</p>
        <p className="message__signature">{siteConfig.signature}</p>

        <button className="message__button" onClick={launchConfetti}>
          feliz aniversário, {siteConfig.girlfriendName} ✨
        </button>
      </div>
    </section>
  )
}
