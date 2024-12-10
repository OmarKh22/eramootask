import React from 'react'
import { circle, goOffer, offer } from '../assets'
import { Button } from '@headlessui/react'

const Info = () => {
  return (
    <section className='p-6'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center w-full h-full'>
                <img src={goOffer} alt="" />
            </div>
            <div>
                <h3 className='text-center text-2xl font-bold text-[#262254]'>ما هي منــصة جو اوفـر </h3>
            </div>
        </div>
        <div className='flex justify-between items-center my-10 mx-28'>
            <div className='w-full h-full object-contain'>
                <img src={offer} alt="" />
            </div>
            <div className='flex flex-col gap-2 justify-between items-end'>
                <p className='text-[#2F3441] items-end'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                     حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
                <h5 className='text-[#262254]'>ما يمزنا</h5> 
                <div className='flex items-center justify-between py-5 gap-2'>
                    <div>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <img src={circle} className='text-[#FFEBF1] w-6 h-6 rounded-full' />
                </div>
                <div className='flex items-center justify-between py-5 gap-2'>
                    <div>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <img src={circle} className='text-[#FFEBF1] w-6 h-6 rounded-full' />
                </div>
                <div className='flex items-center justify-between py-5 gap-2'>
                    <div>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <img src={circle} className='text-[#FFEBF1] w-6 h-6 rounded-full' />
                </div>
                <div className='flex items-center justify-between py-5 gap-2'>
                    <div>
                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
                    </div>
                    <img src={circle} className='text-[#FFEBF1] w-6 h-6 rounded-full' />
                </div>

                <Button className=" bg-[#543883] py-5 text-white px-9 py-2 rounded-lg text-md font-bold flex justify-between items-center">  الدخول/انشاء حساب </Button>

            </div>
        </div>
    </section>
  )
}

export default Info