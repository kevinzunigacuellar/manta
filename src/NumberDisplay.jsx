import { memo, useMemo } from 'react'
import NumberBox from './NumberBox'
function NumberDisplay({ text, time }) {
  const digits = useMemo(() => time.padStart(2, '0').split(''), [time])

  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex gap-2">
        {digits.map((digit, index) => (
          <NumberBox key={`${index}-${text}-${digit}`} digit={digit} />
        ))}
      </div>
      <p className="font-semibold text-white text-sm">{text}</p>
    </div>
  )
}

export default memo(NumberDisplay)
