import { useState } from 'react';
import img_logo from '../assets/img/logo.svg';

export const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle)
  }

  return (
    <nav className="relative container mx-auto p-6">
      {/* FLex container */}
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={img_logo} alt="logo" />
        </div>

        {/* Menu item */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
          <a href="#" className='hover:text-darkGrayishBlue'>About Us</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Careers</a>
          <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
        </div>

        <a href="#" className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight transition md:block">
          Get Started
        </a>

        {/* ▼ Hamburger Menu */}
        <button 
          id='menu-btn' 
          className={`${menuToggle ? 'open': ''} block hamburger md:hidden focus:outline-none`}
          onClick={handleToggleMenu}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* ▼ Mobile Menu */}
      <div className='md:hidden'>
        <div 
          id='menu' 
          className={`absolute ${menuToggle ? 'flex' :'hidden'} flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="#">Pricing</a>  
          <a href="#">Product</a>  
          <a href="#">About Us</a>  
          <a href="#">Careers</a>  
          <a href="#">Comunity</a>  
        </div>
      </div>
    </nav>
  )
}