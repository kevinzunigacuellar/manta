import { memo } from 'react'

function NumberBox({ digit }) {
  return (
    <div className="backdrop-blur-md bg-white/50 shadow-md inline-block p-2 rounded-lg text-xl w-10 text-center">
      {digit}
    </div>
  )
}

export default memo(NumberBox)
