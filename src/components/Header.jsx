import logo from '../assets/logo.png';
import { Hamburger, Cross, Angle } from '../assets/icons';
import { useState } from 'react';
import { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import metamask from '../assets/metamask.png';
import walletconnect from '../assets/walletconnect.png';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const menuRef = useRef(null);

  return (
    <header {...props}>
      <div className='flex items-center'>
        <h1><Link to="/"><img alt="metabnb logo" src={logo} className="w-32 inline" /></Link></h1>
        <button className='ml-auto' onClick={() => setMenuIsOpen(!menuIsOpen)}>{menuIsOpen ? <Cross className="w-5 h-5" /> : <Hamburger className="w-5 h-5" />}</button>
      </div>
      <div ref={menuRef} className='space-y-2 overflow-hidden transition-[height] mt-5' style={{ height: `${!menuIsOpen ? '0' : menuRef.current.scrollHeight + 'px'}` }}>
        <ul className='flex flex-col gap-1'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/place-to-stay">Place to stay</Link></li>
          <li><Link to="#">NFTs</Link></li>
          <li><Link to="#">Community</Link></li>
        </ul>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="bg-primary text-white py-2 px-5 rounded-lg">Connect Wallet</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className='fixed bg-[rgba(64,64,64,0.3)] inset-0' />
            <Dialog.Content className='py-5 rounded-lg bg-white fixed max-w-[600px] w-[90vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Dialog.Title className='px-5 pb-3 font-bold flex text-2xl'><span>Connect Wallet</span><Dialog.Close className='ml-auto'><Cross className="h-5 w-5" /></Dialog.Close></Dialog.Title>
              <hr className='text-[#CFD8DC]' />
              <div className='mt-5 px-5 space-y-3'>
                <Dialog.Description>Choose your preferred wallet:</Dialog.Description>
                <button className='dialog-button'><span><img src={metamask} alt="metamask logo" />Metamask</span><Angle className="ml-auto" /></button>
                <button className='dialog-button'><span><img src={walletconnect} alt="walletconnect logo" />WalletConnect</span><Angle className="ml-auto" /></button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}