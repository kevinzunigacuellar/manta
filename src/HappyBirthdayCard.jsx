import Confetti from 'react-confetti'

export default function HappyBirthdayCard() {
  return (
    <div>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <p className="text-3xl text-center text-white mb-10 font-bold">Feliz Cumpleaños Manta</p>
      <img className='max-w-md' src="https://www.liveabout.com/thmb/-0mQ_i5M4Lyj-doEFmjGvY4-7z0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/happy-birthday-trump-meme-5ab299d03128340037c472eb.jpg" alt="meme" />
    </div>
  )
}
