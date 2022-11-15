import { FooterLogo, Facebook, Instagram, Twitter } from '../assets/icons';

export default function Footer() {
  return (
    <footer className='bg-[#1D1D1E] text-[#F1F3F9] p-5 flex flex-col gap-5'>
      <div>
        <FooterLogo />
        <h2 className='hidden'>Socials</h2>
        <ul className='flex gap-5 mt-10'>
          <li><a href="#"><Facebook /></a></li>
          <li><a href="#"><Instagram /></a></li>
          <li><a href="#"><Twitter /></a></li>
        </ul>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='space-y-4'>
          <h2>Community</h2>
          <ul className='space-y-2'>
            <li><a href="#">NFT</a></li>
            <li><a href="#">Tokens</a></li>
            <li><a href="#">Landlords</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h2>Places</h2>
          <ul className='space-y-2'>
            <li><a href="#">Castle</a></li>  
            <li><a href="#">Farms</a></li>
            <li><a href="#">Beach</a></li>
            <li><a href="#">Learn more</a></li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h2>About us</h2>
          <ul className='space-y-2'>
            <li><a href="#">Road map</a></li>
            <li><a href="#">Creators</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
      <p className='text-[#F7F7F7]'>&copy; {new Date().getFullYear()} Metabnb</p>
    </footer>
  )
}