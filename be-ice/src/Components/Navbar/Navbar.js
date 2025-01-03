import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
          <Link to="/" className='navbar-diamond' onClick={closeMobileMenu}>
            <img src="/images/diamond.png" height="58" width="73" alt='logo'/>
          </Link>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/logo.png" height="48" width="123" alt='logo'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                NOSOTROS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                PRODUCTOS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                CONTACTO
              </Link>
              {/* <Link to="/sign-up" className='nav-links' onClick={closeMobileMenu}>
                Sign Up
              </Link> */}
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default Navbar