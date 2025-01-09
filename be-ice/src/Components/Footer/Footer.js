import React from 'react'
import { Button } from '../Button/Button'
import './Footer.css'
import { Link } from 'react-router-dom'
import Map from '../Map/Map'

const Footer = () => {
  return (
    <div className='footer-container' id='section3'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Visitá nuestro local!
            </p>
        </section>
        <Map/>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <small className='website-rights'>BE ICE 2025 ©</small>
                <div className='social-icons'>
                    <Link className='social-icon-link tiktok'
                    to='https://www.tiktok.com/@beice2023'
                    target='_blank'
                    aria-label='Tiktok'
                    >
                        <i className='fab fa-tiktok'></i>
                    </Link>
                    <Link className='social-icon-link whatsapp'
                    to='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FAPWOEBH3X2TMO1&e=AT2CxCv2tudIkYZJPYcsianpTq_3qnLaTO9qcaP67UZEXAmwE1vlk8on6qbMBh6l4YhIl7vEIqYRGBVNr3pXbKXzN4iAePJB_O2NQQ'
                    target='_blank'
                    aria-label='Whatsapp'
                    >
                        <i className='fab fa-whatsapp'></i>
                    </Link>
                    <Link className='social-icon-link instagram'
                    to='https://www.instagram.com/beice.shop/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer