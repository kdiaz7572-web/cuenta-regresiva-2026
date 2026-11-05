import { useEffect, useState } from 'react'

// Costa Rica no usa horario de verano: UTC-6 todo el año.
// Con el offset explícito en el ISO string, Date lo interpreta
// en esa zona sin depender de la zona horaria del navegador.
const TARGET_DATE = new Date('2026-12-03T05:30:00-06:00')

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds, finished: false }
}

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    if (timeLeft.finished) return

    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft.finished])

  return timeLeft
}
