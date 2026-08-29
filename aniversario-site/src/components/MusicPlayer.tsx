import { useEffect, useRef, useState } from 'react'
import { playlist } from '../data/music'

interface MusicPlayerProps {
  autoStart: boolean
}

export default function MusicPlayer({ autoStart }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [trackIndex, setTrackIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const track = playlist[trackIndex]

  useEffect(() => {
    if (!autoStart || !audioRef.current) return
    audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart])

  useEffect(() => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false))
    } else {
      audioRef.current.pause()
    }
  }, [playing, trackIndex])

  const next = () => setTrackIndex((i) => (i + 1) % playlist.length)
  const prev = () => setTrackIndex((i) => (i - 1 + playlist.length) % playlist.length)

  return (
    <div className={`player ${expanded ? 'player--expanded' : ''}`}>
      <audio
        ref={audioRef}
        src={track.src}
        onEnded={next}
        loop={playlist.length === 1}
      />

      <button
        className="player__toggle"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? 'Pausar música' : 'Tocar música'}
      >
        <span className={`player__bars ${playing ? 'player__bars--animating' : ''}`}>
          <i /><i /><i /><i />
        </span>
      </button>

      <button
        className="player__info"
        onClick={() => setExpanded((e) => !e)}
      >
        <span className="player__title">{track.title}</span>
        <span className="player__artist">{track.artist}</span>
      </button>

      {expanded && (
        <div className="player__controls">
          <button onClick={prev} aria-label="Música anterior">‹</button>
          <button onClick={next} aria-label="Próxima música">›</button>
        </div>
      )}
    </div>
  )
}
