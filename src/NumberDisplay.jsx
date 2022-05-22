import { memo } from 'react'
import NumberBox from './NumberBox'

function NumberDisplay({ text, time }) {
  const number = time < 10 ? time.toString().padStart(2, '0') : time.toString()
  const numbers = number.split('')
  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex gap-2">
        {numbers.map((number, index) => (
          <NumberBox digit={number} key={`${index}-${text}-${number}`} />
        ))}
      </div>
      <p className="font-semibold text-white text-sm">{text}</p>
    </div>
  )
}

export default memo(NumberDisplay)
