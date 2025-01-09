import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className='map-responsive'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1658.7006589724508!2d-61.96454877107962!3d-33.75029399719357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c87b007325f743%3A0xf84e4428e5d1836e!2sBe%20Ice%20Shop!5e0!3m2!1ses-419!2sar!4v1736356992675!5m2!1ses-419!2sar" 
        allowFullScreen=''
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map