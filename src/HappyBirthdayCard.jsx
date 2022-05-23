import Confetti from 'react-confetti'

export default function HappyBirthdayCard() {
  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <p className="text-4xl font-bold">Happy birthday Sam 🤗</p>
    </>
  )
}
