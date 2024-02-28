import { useEffect, useState, lazy, Suspense } from 'react'
import NumberDisplay from './NumberDisplay'

const HappyBirthdayCard = lazy(() => import('./HappyBirthdayCard'))
const targetDate = new Date('March 18, 2024 0:0:0').getTime()

export default function Countdown() {
  const [countdown, setCountdown] = useState(targetDate - new Date().getTime())

  useEffect(() => {
    if (countdown <= 0) {
      return
    }
    const timeout = setTimeout(() => {
      setCountdown(prevCount => prevCount - 1000)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [countdown])

  // no need to memo this since they're primitive values
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24)).toString()
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString()
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)).toString()
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000).toString()

  if (countdown <= 0) {
    return (
      <Suspense fallback={null}>
        <HappyBirthdayCard />
      </Suspense>
    )
  }
  return (
    <main className="bg-white/30 backdrop-blur p-6 rounded-lg shadow">
      <h1 className="text-xl font-semibold mb-4 text-slate-800">Sam's blowout starts in</h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
        <NumberDisplay text="days" time={days} />
        <NumberDisplay text="hours" time={hours} />
        <NumberDisplay text="minutes" time={minutes} />
        <NumberDisplay text="seconds" time={seconds} />
      </div>
    </main>
  )
}
