"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <Slider className=' w-[96%] mx-auto md:mx-0 md:w-[99%]' {...settings}>
      <div>
        <img src="/Home/banner_01.png" alt="Banner 1" />
      </div>
      <div>
        <img src="/Home/banner_02.png" alt="Banner 2" />
      </div>
      <div>
        <img src="/Home/banner_03.png" alt="Banner 3" />
      </div>
      <div>
        <img src="/Home/banner_04.png" alt="Banner 4" />
      </div>
      <div>
        <img src="/Home/banner_05.png" alt="Banner 5" />
      </div>
      <div>
        <img src="/Home/banner_06.png" alt="Banner 6" />
      </div>
      <div>
        <img src="/Home/banner_07.png" alt="Banner 7" />
      </div>
      <div>
        <img src="/Home/banner_08.png" alt="Banner 8" />
      </div>
    </Slider>
  );
};

export default SliderBanner;