import React from 'react'
import { speacialCoupon } from '../assets'
import { Button } from '@headlessui/react';
import { elsalaCoupon, extraCoupon, oodCoupon } from "../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoHeartOutline } from "react-icons/io5";
import { WiTime8 } from "react-icons/wi";
import { PiSealPercent } from "react-icons/pi";
import { IoMdShare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';

const categories = [
  { title: "اكــســتـرا", image: extraCoupon , code: "%كود خصم 25  " , time: "اخر استخدام منذ 1 سـاعة"  },
  { title: "العـربية للـعــود", image: oodCoupon , code: "%كود خصم 25 " , time: "اخر استخدام منذ 1 سـاعة"},
  { title: "الصالة الاقتصادية ", image: elsalaCoupon , code: "%كود خصم 25 " , time: "اخر استخدام منذ 1 سـاعة"},
  { title: "اكــســتـرا", image: extraCoupon , code: "%كود خصم 25 " , time: "اخر استخدام منذ 1 سـاعة"},
];

const SpeacialCoupon = () => {

    const settings = {
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3, 
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
    <section>
        <div  style={{
            backgroundImage: `url(${speacialCoupon})`,
            backgroundSize: "cover", // لتغطية الخلفية بالكامل
            backgroundPosition: "center", // لجعل الخلفية في المنتصف
            backgroundRepeat: "no-repeat", // لمنع التكرار
        }} className='w-full h-[500px] py-10'> 
        <h1 className='text-white text-3xl font-bold text-center'>عروض وكوبونات خاصة بمناسبة اليوم الوطني الـــ94</h1>

        <div>
       <div className="container mx-auto px-4">
        <div className="flex justify-between ">
        <div className="flex mx-4">
          <TfiArrowCircleLeft  className="ml-3 text-[#ffffff] text-2xl bg-[#28712a] rounded-full" />
          <TfiArrowCircleRight  className="ml-3 text-[#ffffff] text-2xl bg-[#28712a] rounded-full" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white  mb-8 text-center">
          العروض و الكــوبونـــات  </h2>
        </div>
        <Slider {...settings}>
                {categories.map((category, index) => (
                    <div key={index} className="w-[200px] h-[300px] flex justify-between items-center bg-[#C6CDDC] shadow-gray-200 p-4 mb-8 mx-5 shadow-md rounded-lg hover:shadow-lg ">
                        <div className="flex justify-between ">
                        <div className="pt-5 flex flex-col justify-between">
                            <h3 className="text-[#543883] font-semibold text-xl flex justify-between"><IoHeartOutline /> {category.title}</h3>
                            <p className="text-[#636B7F] text-md ">{category.code}</p>
                            <p className="text-[#FFA360] text-[13px] flex justify-between items-center px-[1px]">{category.time} <WiTime8  className="text-xl"/></p>
                            <Button className=" bg-[#033F24] text-white px-9 py-2 rounded-lg text-[10px] font-bold flex justify-between items-center"> عــرض الكــود <PiSealPercent className="text-xl font-bold pt-1" /> </Button>
                        </div>
                        <div className="px-5">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-[150px] h-[180px]"
                            />
                        </div>
                        </div>
                        
                        <div className="my-5 border" />

                        <div className="flex justify-between m-3">
                            <div className="flex justify-between items-center" >
                            <p className="flex items-center text-[#262254]">مشاركة</p>
                            <IoMdShare className="pt-2 text-3xl text-[#543883]" />
                            </div>
                            <div className="flex justify-between items-center">
                            <div className="flex items-center">
                            <p className="pr-3">(4.9) </p>
                            <FaStar className="text-[#FFC107] mr-2" /> 
                            </div>
                            <div className="pr-3">|</div>
                            <button className="pl-3 bg-green-600 text-white p-2 rounded">كود فعال</button>
                            </div>
                        </div>
                    </div>
                ))}
        </Slider>
      </div>
        </div>
        </div>
    </section>
  )
}

export default SpeacialCoupon