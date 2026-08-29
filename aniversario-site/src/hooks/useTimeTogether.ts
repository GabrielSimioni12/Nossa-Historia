import { useEffect, useState } from 'react'

export interface Elapsed {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function useTimeTogether(startDate: string): Elapsed {
  const [elapsed, setElapsed] = useState<Elapsed>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const start = new Date(startDate).getTime()

    const tick = () => {
      const diff = Math.max(0, Date.now() - start)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setElapsed({ days, hours, minutes, seconds })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [startDate])

  return elapsed
}
