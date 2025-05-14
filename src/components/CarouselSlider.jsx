import React from "react";
import { Carousel } from "flowbite-react";
import HomeImg from "../assets/home.jpg";
import ContactImg from "../assets/contact_background.png";

const CarouselSlider = () => {
  return (
    <div className="h-[60vh] md:h-[75vh] lg:h-[95vh] w-full object-cover object-center">
      <Carousel leftControl=" " rightControl=" " slideInterval={5000}>
        <img
          src="./assets/homeSliderPage/slider1.png"
          alt="..."
          className="w-full md:h-screen object-cover object-center"
        />
        <img
          src="./assets/homeSliderPage/slider2.png"
          alt="..."
          className="w-full md:h-screen object-cover object-center"
        />
        <img
          src="./assets/homeSliderPage/slider3.png"
          alt="..."
          className="w-full md:h-screen object-cover object-center"
        />
        <img
          src="./assets/homeSliderPage/slider4.png"
          alt="..."
          className="w-full md:h-screen object-cover object-center"
        />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
