import React from 'react'
import { headphone, hero, lap, maktaba, playstaion, watch } from '../assets'
import { Button } from '@headlessui/react'
import { IoSearchOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <div>
        <div className='relative pt-10'>
            <img src={hero} alt="" className='pl-32'/>
        </div>
        {/* photos on hero img */}
        <div>
            <img src={maktaba} alt="" className='absolute top-48 left-[45%]'/>
            <img src={lap} alt="" className='absolute top-40 left-44'/>
            <img src={watch} alt="" className='absolute top-52 left-[70%]'/>
            <img src={playstaion} alt="" className='absolute top-[60%] left-24'/>
            <img src={headphone} alt="" className='absolute top-[65%] left-[75%]'/>
        </div>
        {/* search bar */}
            <div className='w-full'>
                <Button className="absolute z-10 top-[81.5%] left-[23%] bg-[#543883] text-white px-10 py-1 rounded-lg mr-3 "> بحث  </Button>
                <input type="text" className=' absolute top-[80%] left-[20%] w-[850px] h-14 flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-right placeholder:pr-5 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2' placeholder=' ...... ابحث عن كل ما تحتاجه' />
                <IoSearchOutline className='absolute left-[74.7%] top-[82.2%] text-2xl text-[#FFA360]' />

            </div>
    </div>
  )
}

export default Hero