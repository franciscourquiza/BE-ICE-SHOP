import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { Button } from '../Button/Button';
import './Navbar.css';

const Navbar = () => {
  const [click ,setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click)
  }
  const closeMobileMenu = () => {
    setClick(false)
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="section0" className='navbar-diamond' onClick={closeMobileMenu}>
            <img src="/images/diamond.png" height="58" width="73" alt='logo'/>
          </Link>
          <Link to="section0" className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/logo.png" height="41.5" width="115" alt='logo'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="section1" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                NOSOTROS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="section2" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                PRODUCTOS
              </Link>
            </li>
            <li className='nav-item3'>
              <Link to="section3" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar