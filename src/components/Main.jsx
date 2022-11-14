import hero1 from '../assets/hero-1.png';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.png';
import hero4 from '../assets/hero-4.png';
import mbtoken from '../assets/mbtoken.svg';
import metamask from '../assets/metamask.svg';
import opensea from '../assets/open-sea.svg';
import img1 from '../assets/homes_images/home-5.png';
import img2 from '../assets/homes_images/home-6.png';
import img3 from '../assets/homes_images/home-7.png';
import img4 from '../assets/homes_images/home-8.png';
import img5 from '../assets/homes_images/home-1.png';
import img6 from '../assets/homes_images/home-2.png';
import img7 from '../assets/homes_images/home-3.png';
import img8 from '../assets/homes_images/home-4.png';

import Card from './Card';

export default function Main(props) {
  return (
    <main {...props}>
      <section className='flex gap-5 flex-col'>
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
      </section>
      <section className='flex bg-primary mt-16 flex-wrap justify-around gap-3 py-1'>
        <img src={mbtoken} />
        <img src={metamask} />
        <img src={opensea} />
      </section>
      <section className='my-6'>
        <h2 className='font-bold text-black text-2xl text-center'>Inspiration for your next adventure</h2>
        <div className='py-5 grid gap-3'>
          { [img1, img2, img3, img4, img5, img6, img7, img8].map((img) => <Card key={img} imgSrc={img} name="Desert king" price="1MBT per night" distance="2345km away" availability="available for 2weeks stay" />)}
        </div>
      </section>
    </main>
  )
}