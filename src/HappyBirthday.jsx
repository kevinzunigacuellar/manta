import Confetti from 'react-confetti'

export default function HappyBirthday() {
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <p className="text-4xl font-bold">Happy birthday Sam 🤗</p>
    </>
  )
}
