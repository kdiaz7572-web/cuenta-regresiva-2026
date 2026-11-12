import './App.css'
import { useCountdown } from './useCountdown'

const UNITS = [
  { key: 'days', label: 'Días' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Minutos' },
  { key: 'seconds', label: 'Segundos' },
]

function pad(value) {
  return String(value).padStart(2, '0')
}

function TimeCard({ value, label }) {
  return (
    <div className="time-card">
      <span key={value} className="time-value">
        {pad(value)}
      </span>
      <span className="time-label">{label}</span>
    </div>
  )
}

function App() {
  const timeLeft = useCountdown()

  return (
    <div className="page">
      <main className="countdown">
        <h1 className="title">La cuenta regresiva ha comenzado</h1>
        <p className="subtitle">Cada segundo nos acerca más</p>

        {timeLeft.finished ? (
          <p className="finished-message">¡Llegó el momento!</p>
        ) : (
          <div className="cards">
            {UNITS.map((unit) => (
              <TimeCard key={unit.key} value={timeLeft[unit.key]} label={unit.label} />
            ))}
          </div>
        )}

        <p className="target-date">Viernes 11 de diciembre de 2026 | 5:30 p. m.</p>
      </main>
    </div>
  )
}

export default App
