"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const IndustryStories = () => {
    const storyItems = [
        {"icons":<Image className="p-1.5 rounded-full bg-primary-400" width={30} height={30} alt="icons" src="/curency_icon.svg" />, text:["Agri Tech", "Healthcare"]},
        {"icons":<Image className="p-1.5 rounded-full bg-secondary-200" width={30} height={30} alt="icons" src="/curency_icon.svg" />, text:["Food Processing"]},
        {"icons":<Image className="p-1.5 rounded-full bg-warning-200" width={30} height={30} alt="icons" src="/curency_icon.svg" />, text:["Commodity Wholesalers"]},
        {"icons":<Image className="p-1.5 rounded-full bg-danger-100" width={30} height={30} alt="icons" src="/curency_icon.svg" />, text:["Milk Products"]},
        {"icons":<Image className="p-1.5 rounded-full bg-secondary-100" width={30} height={30} alt="icons" src="/curency_icon.svg" />, text:["Plasitic Manufacturers"]},
        {"icons":<Image className="p-1.5 rounded-full bg-primary-100" width={30} height={30} alt="icons" src="/curency_icon.svg" />, text:["Electrical Brands", "CPG Brands"]},
        {"icons":<Image className="p-1.5 rounded-full bg-warning-400" width={30} height={30} alt="icons" src="/curency_icon.svg" />, text:["Horeca Brands", "Wholesale Markets"]}      
    ];
  const settings = {
    dots: false,
    infinite: true,
  speed: 500,             
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
  nextArrow: false
  };

  return (
    <Slider className=' w-[96%] mx-auto md:mx-0 md:w-[99%]' {...settings}>
     
      {storyItems.map((item, index) => (
                    <div className="flex flex-row justify-center items-center gap-2" key={`${item}-${index}`}>
                        <div className='float-left flex justify-center items-center mt-1 me-1'>
                        {item.icons}
                        </div>
                        <ul className='flex flex-row justify-between items-center gap-2 float-left me-2'>{item.text.map((eachtext)=>(
                            <li className="text-xs font-normal border shadow-md bg-white rounded-full py-2 px-3">{eachtext}</li>
                        ))}                            
                        </ul>
                    </div>
                    ))}
      
      
    </Slider>
  );
};

export default IndustryStories;