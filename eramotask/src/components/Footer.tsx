import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { appStore, goOffeerFooter, googleStore } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center object-contain p-5">
            <img src={goOffeerFooter} alt="" className="w-16 h-16"/>
        </div>
        <div className="flex flex-wrap justify-between">
          {/* العمود الأول */}
          <div className="w-full md:w-1/4 text-center flex flex-col justify-center">
            <h3 className="text-[#543883] font-bold mb-4">التواصل الاجتماعي والتطبيق</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <FaInstagram className="text-[#543883] text-2xl" />
              <FaFacebook className="text-[#543883] text-2xl" />
              <FaSnapchat className="text-[#543883] text-2xl" />
              <FaLinkedin className="text-[#543883] text-2xl" />
            </div>
            <div className="flex flex-col justify-between items-center">
              <button className="flex items-center  rounded-lg">
                <img src={appStore} alt="" />
              </button>
              <button className="flex items-center  rounded-lg">
                <img src={googleStore} alt="" />
              </button>
            </div>
          </div>
          

          {/* العمود الثاني */}
          <div className="w-full md:w-1/4 text-center md:text-right">
            <h3 className="text-[#543883] font-bold mb-4">الفئات  </h3>
            <ul className="space-y-2">
              <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
    البقالة
  </li>
  <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
     الملابس
  </li>
  <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
    الرفهيات والسفر
  </li>
  <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
     مستلزمات المنزل
  </li>
  <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
      الكفيهات
  </li>
            </ul>
          </div>

          {/* العمود الثالث */}
          <div className="w-full md:w-1/4 text-center md:text-right">
            <h3 className="text-[#543883] font-bold mb-4">العلامات التجارية</h3>
            <ul className="space-y-2">
              <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
    العثـيم
  </li>
  <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
    تمور واكثر
  </li>
  <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
    نعناع
  </li>
  <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
     نون
  </li>
  <li className="relative">
    <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
     سنتر بوينت
  </li>
            </ul>
          </div>

          {/* العمود الرابع */}
          <div className="w-full md:w-1/4 text-center md:text-right">
            <h3 className="text-[#543883] font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li className="relative">
              <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>الرئيسة</li>
              <li className="relative">
              <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
               الكوبونات
                 </li>
               <li className="relative">
                <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
              الصفقات
           </li>
           <li className="relative">
         <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
           تواصل معنا
           </li>
          <li className="relative">
             <span className="absolute left-[320px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
            العرض اليومي
           </li>
            </ul>
          </div>
          </div>

        {/* حقوق الطبع */}
        <div className="flex justify-between mt-8 border-t pt-4 text-center">
          <p className="text-sm text-gray-500 font-bold">© 2024 الحقوق محفوظة إلى جو أوفر</p>
          <div className="flex justify-center space-x-4 mt-2 text-sm text-[#543883]">
            <a href="/terms">الشروط والأحكام</a>
            
            <a href="/privacy">خصوصية الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
