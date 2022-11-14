import logo from '../assets/logo.png';
import { Hamburger, Cross } from '../assets/icons';
import { useState } from 'react';
import { useRef } from 'react';

export default function Header(props) {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const menuRef = useRef(null);

  return (
    <header {...props}>
      <div className='flex'>
        <img alt="metabnb logo" src={logo} className="w-32 inline" />
        <button className='ml-auto' onClick={() => setMenuIsOpen(!menuIsOpen)}>{menuIsOpen ? <Cross className="w-5 h-5" /> : <Hamburger className="w-5 h-5" />}</button>
      </div>
      <div ref={menuRef} className='space-y-2 overflow-hidden transition-[height] mt-5' style={{ height: `${!menuIsOpen ? '0' : menuRef.current.scrollHeight + 'px'}` }}>
        <ul className='flex flex-col gap-1'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Place to stay</a></li>
          <li><a href="#">NFTs</a></li>
          <li><a href="#">Community</a></li>
        </ul>
        <button className="bg-primary text-white py-2 px-5 rounded-lg">Connect Wallet</button>
      </div>
    </header>
  )
}