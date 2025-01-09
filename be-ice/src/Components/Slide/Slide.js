import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import './Slide.css'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

const Slide = () => {

    return (
        <div className='slider-container' id='section2'>
            
            <h1>EXPLORA NUESTRO CATALOGO</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]}
            >
                <SwiperSlide>
                    <img src='/images/nike1.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike2.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike3.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike4.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike5.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike6.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike7.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike8.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike9.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/nike10.png' alt="burger" height='600' width='400'/>
                </SwiperSlide>

                <div className='slider-controler'>
                    <div className='swiper-button-prev'>
                        <ArrowLeft size={20} />
                    </div>
                    <div className='swiper-button-next'>
                        <ArrowRight size={20} />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Slide