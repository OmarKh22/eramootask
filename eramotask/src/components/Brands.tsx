import React from 'react'
import { akalat, almarai, nana, tmor } from '../assets';
import Slider from "react-slick";



const categories = [
  { title: "نــعنــاع", image: nana  },
  { title: "تــمور واكــثـر", image: tmor },
  { title: " أكلات جــدودنــا ", image: akalat },
  { title: "الــمراعـــي", image: almarai },
];

const Brands = () => {

      const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    centerMode: true, 
    focusOnSelect: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className='mx-auto px-20 py-5 bg-[#FDF4F9]'>
        <div>
            <h3 className='text-center text-3xl font-bold text-[#262254]'>تـــصــفح حســب العــلامات الـــتجــارية</h3>
        </div>
        <div className='my-6'>
        <Slider {...settings}>
         {categories.map((category, index) => (
            <div key={index} className=" flex flex-col justify-center items-center bg-white shadow-gray-200 py-5 mx-auto shadow-md rounded-lg hover:shadow-lg ">
              <div className="flex justify-center items-center w-full h-full">
                <img
                src={category.image}
                alt={category.title}
                className="w-[150px] h-[130px] mb-4 object-contain"
                />
              </div>
              <h3 className="text-[#543883] font-semibold text-center text-xl">{category.title}</h3>
            </div>
          ))}
        </Slider>
        </div>
    </section>
  )
}

export default Brands