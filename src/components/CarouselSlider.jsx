import React from 'react'
import { Carousel } from 'flowbite-react';
import HomeImg from '../assets/home.jpg'
import ContactImg from '../assets/contact_background.png'

const CarouselSlider = () => {
  return (
    <div className="h-[calc(100vh-300px)] md:h-screen w-full object-cover object-center">
      <Carousel leftControl=" " rightControl=" " slideInterval={5000}>
        <img src='./assets/salonlar/5.jpg' alt="..." className='w-full md:h-screen object-cover object-center' />
        <img src='./assets/salonlar/1.jpg' alt="..." className='w-full md:h-screen object-cover object-center' />
        <img src='./assets/salonlar/2.jpg' alt="..." className='w-full md:h-screen object-cover object-center' />
        <img src='./assets/salonlar/3.jpg' alt="..." className='w-full md:h-screen object-cover object-center' />
        <img src='./assets/salonlar/4.jpg' alt="..." className='w-full md:h-screen object-cover object-center' />
      </Carousel>
    </div>
  )
}

export default CarouselSlider