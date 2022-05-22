import { useEffect, useState } from 'react'
import HappyBirthday from './HappyBirthday'
import NumberDisplay from './NumberDisplay'

const targetDate = new Date('March 18, 2023 0:0:0').getTime()

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

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000)

  if (countdown <= 0) {
    return <HappyBirthday />
  }
  return (
    <div className="bg-white/30 backdrop-blur p-6 rounded-lg shadow">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Sam's blowout starts in</h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
        <NumberDisplay text="days" time={days} />
        <NumberDisplay text="hours" time={hours} />
        <NumberDisplay text="minutes" time={minutes} />
        <NumberDisplay text="seconds" time={seconds} />
      </div>
    </div>
  )
}
