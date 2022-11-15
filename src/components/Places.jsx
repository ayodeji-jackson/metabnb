import img1 from '../assets/homes_images/home-1.png';
import img2 from '../assets/homes_images/home-2.png';
import img3 from '../assets/homes_images/home-3.png';
import img4 from '../assets/homes_images/home-4.png';
import img5 from '../assets/homes_images/home-5.png';
import img6 from '../assets/homes_images/home-6.png';
import img7 from '../assets/homes_images/home-7.png';
import img8 from '../assets/homes_images/home-8.png';
import img9 from '../assets/homes_images/home-9.png';
import img10 from '../assets/homes_images/home-10.png';
import img11 from '../assets/homes_images/home-11.png';
import img12 from '../assets/homes_images/home-12.png';
import img13 from '../assets/homes_images/home-13.png';
import img14 from '../assets/homes_images/home-14.png';
import img15 from '../assets/homes_images/home-15.png';
import img16 from '../assets/homes_images/home-16.png';
import { Settings } from '../assets/icons';

import Card from './Card';

export default function Places() {
  return (
    <section className='px-5 my-6'>
      <div className='flex gap-3 items-center'>
        <ul className='list-none flex gap-5 overflow-x-auto whitespace-nowrap select-none'>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantasy City</li>
          <li>Beach</li>
          <li>Cabin</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <button className='flex gap-5 border border-[#B4B4B4] py-2 px-3 rounded-lg hover:bg-[#F8F9FA] transition-colors'>Location<Settings /></button>
      </div>
      <div className='py-5 grid gap-3'>
        { [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16].map((img) => <Card key={img} imgSrc={img} name="Desert king" price="1MBT per night" distance="2345km away" availability="available for 2weeks stay" />)}
      </div>
    </section>
  )
}