import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.png';
import hero4 from '../assets/hero-4.png';

export default function Main(props) {
  return (
    <main {...props}>
      <div className='flex gap-5 flex-col'>
        <div className='space-y-3'>
          <h2 className='text-3xl'>Rent a <span className='emph'>Place</span> away from <span className='emph'>Home</span> in the <span className='emph'>Metaverse</span></h2>
          <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <div className='flex flex-col gap-1'>
            <input type="search" placeholder="Search for location" className='py-2 px-4 text-sm border border-gray-400 rounded-md' />
            <button className='text-white bg-primary rounded-md py-2'>Search</button>
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-1 [*:border-radius:15px]'>
          <img src={hero1} className="translate-y-9 rounded-lg" />
          <img src={hero2} className="rounded-lg" />
          <img src={hero3} className="translate-y-9 rounded-lg" />
          <img src={hero4} className="rounded-lg" />
        </div>
      </div>
    </main>
  )
}