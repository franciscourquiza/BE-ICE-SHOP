import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container' id='section0'>
        <video src='/videos/beicevideo.mp4' autoPlay loop muted />
        <h1>SNEAKER CLUB</h1>
        <p>¿Qué estás esperando?</p>
        <div className='hero-btns'>
            <Button 
            className="btns" 
            buttonStyle="btn--outline"
            buttonSize="btn--large">
                VER MÁS
            </Button>
        </div>
    </div>
  )
}

export default Hero