import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

const Header = ({ navColor, light }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const buttonStyle = "bg-colorBlue hover:bg-colorLightblue text-white font-bold py-2 px-4 rounded-md text-sm";

  return (
    <header className="site-header site-header--sticky is--white border-b border-gray-200" id="sticky-menu">
      <div className='global-container'>
        <div className='custom-header-container flex items-center justify-between'>
          
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Logo light={light} />
          </div>

          {/* Desktop Navbar */}
          <div className='hidden md:flex flex-grow justify-center'>
            <Navbar mobileMenu={false} setMobileMenu={setMobileMenu} color={navColor} />
          </div>

          {/* Right-side actions */}
          <div className='flex items-center gap-4 flex-shrink-0'>
            {/* Get Started Button - Desktop only */}
            <div className="hidden md:block">
              <Link 
                to="https://calendly.com/hello-logpilot/30min?month=2025-06" 
                target="_blank"
                className={buttonStyle}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle Button - Mobile only */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMobileMenu(prev => !prev)}
            >
              <img
                src="assets/img/th-1/menu_bar.svg"
                alt="menu toggle"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar Drawer */}
      {mobileMenu && (
        <div className="md:hidden">
          <Navbar mobileMenu={true} setMobileMenu={setMobileMenu} color={navColor} />
        </div>
      )}
    </header>
  );
};

export default Header;
