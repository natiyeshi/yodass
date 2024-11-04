import React, { useState } from 'react'
import Test from './Test'
import {MdOutlineNavigateNext as Next } from "react-icons/md"
import Star2 from "../../assets/star2.svg"
import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const onPrevButtonClick = () => {
      if (!emblaApi) return;
      emblaApi.scrollPrev();
    };
  
    const onNextButtonClick = () => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    };
    const data = [
        {
            d : `The LED lighting letters that YODASS 
            created for our storefront are amazing. 
            They are eye-catching, energy-efficient,
            and have helped to increase foot traffic 
            to our business. Highly recommend!`,
            p : `Muse Assefa `,
            w : `General Manager At Getseta Trading`,
        },
        {
            d : `We had a light box made by YODASS for
            our trade show booth, and it was a huge
            hit. The design was perfect, and the 
            illumination really made our branding 
            stand out. We received so many 
            compliments on it!`,
            p : `Melat Girma`,
            w : `CEO and Founder At Equilibrium Construction `,


        },
        {
            d : `I had been struggling to develop a 
            strong brand identity for my business, 
            but YODASS helped me to create 
            a logo and brand elements that truly 
            represented my business. 
            The process was easy, and the results 
            were fantastic. Thank you!`,
            p : `Mesay Girma`,
            w : `Founder At Sifen soap`,
        },
    ]
  
  const tests = data.map((val,ind) => <Test key={ind}  ind={ind} {...val} />) 
  return (
    <div className='relative px-p18 max-md:px-4 mt-32 flex flex-col gap-4 bg-green-3 '>
        <img src={Star2 } alt="" className={`max-lg:hidden absolute -left-40 -bottom-12`} width={"320px"} />
        
        <h1 className='text-2xl text-blues font-bold text-center '>Testimonials</h1>
        <div className='relative bg--400'>
        
            <div className="mt-5 w-full overflow-hidden " ref={emblaRef}>
                <div className="flex">
                    {tests}
                </div>
            </div>
            <div className='flex gap-2 mt-6 lg:hidden'>

            <button 
                    onClick={onPrevButtonClick}
                    className={`bg-blue-600 hover:bg-blue-500 hover:shadow hover:shadow-gray-500   cursor-pointer  duration-100 rotate-180  p-2 rounded-full`}>
                    <Next className='text-white text-2xl ' />
                </button>

                <button 
                    onClick={onNextButtonClick}
                    className={`bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-gray-500  cursor-pointer  duration-100  right-1  p-2 rounded-full`}>
                    <Next className='text-white text-2xl ' />
                </button>
            </div>

        </div> 
        

    </div>
  )
}

export default Testimonials