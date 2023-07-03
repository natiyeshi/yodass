import React, { useState } from 'react'
import Test from './Test'
import {MdOutlineNavigateNext as Next } from "react-icons/md"
import Star2 from "../../assets/Star2.svg"

const Testimonials = () => {
    const [curr,setCurr] = useState(0)

    const data = [
        {
            d : `The LED lighting letters that YODASS 
            created for our storefront are amazing. 
            They are eye-catching, energy-efficient,
            and have helped to increase foot traffic 
            to our business. Highly recommend!`,
            p : `Aida Desta `,
            w : `Marketing Manager`,
            // c : `-${curr * 300}px`
            c : `-${curr * 264}px`
        },
        {
            d : `We had a light box made by YODASS for
            our trade show booth, and it was a huge
            hit. The design was perfect, and the 
            illumination really made our branding 
            stand out. We received so many 
            compliments on it!`,
            w : `Marketing Manager`,
            p : `Selamawit Mekonnen `,
        },
        {
            d : `I had been struggling to develop a 
            strong brand identity for my business, 
            but YODASS helped me to create 
            a logo and brand elements that truly 
            represented my business. 
            The process was easy, and the results 
            were fantastic. Thank you!`,
            p : `Natnael Zewdu `,
            w : `Operation Coordinator`,
        },
        {
            d : `I had been struggling to develop a 
            strong brand identity for my business, 
            but YODASS helped me to create 
            a logo and brand elements that truly 
            represented my business. 
            The process was easy, and the results 
            were fantastic. Thank you!`,
            p : `Natnael Zewdu `,
            w : `Operation Coordinator`
        },
        {
            d : `I had been struggling to develop a 
            strong brand identity for my business, 
            but YODASS helped me to create 
            a logo and brand elements that truly 
            represented my business. 
            The process was easy, and the results 
            were fantastic. Thank you!`,
            p : `Natnael Zewdu `,
            w : `Operation Coordinator`,
        },
        {
            d : `....I had been struggling to develop a 
            strong brand identity for my business, 
            but YODASS helped me to create 
            a logo and brand elements that truly 
            represented my business. 
            The process was easy, and the results 
            were fantastic. Thank you!`,
            p : `Natnael Zewdu `,
            w : `Operation Coordinator`,
        }
        
    ]
  
  const tests = data.map((val,ind) => <Test key={ind} curr={curr} ind={ind} {...val} />) 
  return (
    <div className='relative px-p18 max-md:px-4 mt-32 flex flex-col gap-4 bg-green-3 '>
        <img src={Star2 } alt="" className={`max-lg:hidden absolute -left-40 -bottom-12`} width={"320px"} />
        
        <h1 className='text-2xl text-blues font-bold text-center '>Testimonials</h1>
        <p className='text-center text-lg'>What our customers say</p>
        <div className='relative bg--400'>
        
            <div className=' flex  overflow-hidden bg-red-30 gap-1 w-11/12   mx-auto' >
                {tests}
                {/* 253 + 12 = 265 */}
            </div>

            <button 
                    disabled = {curr < 1}
                    onClick={() => setCurr(curr - 1)}
                    className={`${curr == 0 ? 'hover:bg-gray-500 bg-gray-400' : 'bg-blue-600 hover:bg-blue-500'} hover:shadow hover:shadow-gray-500  absolute top-1/2 cursor-pointer  duration-100 -left-2 rotate-180  p-2 rounded-full`}>
                    <Next className='text-white text-2xl ' />
                </button>

                <button 
                    disabled={curr == 5}
                    onClick={() => setCurr(curr + 1)}
                    className={`${curr == 5 ? 'hover:bg-gray-500 bg-gray-400' : 'bg-blue-600 hover:bg-blue-500'} hover:shadow-lg hover:shadow-gray-500 absolute top-1/2 cursor-pointer  duration-100 md:-right-0 right-1  p-2 rounded-full`}>
                    <Next className='text-white text-2xl ' />
                </button>

        </div> 
        <div className='flex justify-center gap-3 mt-3'>
            <button onClick={() => setCurr(0)} className={`${curr == 0 ? 'bg-blues' : 'bg-gray-300'} rounded-full`} style={{width:"10px",height:"10px"}}></button>    
            <button onClick={() => setCurr(1)} className={`${curr == 1 ? 'bg-blues' : 'bg-gray-300'} rounded-full`} style={{width:"10px",height:"10px"}}></button>    
            <button onClick={() => setCurr(2)} className={`${curr == 2 ? 'bg-blues' : 'bg-gray-300'} rounded-full`} style={{width:"10px",height:"10px"}}></button>    
            <button onClick={() => setCurr(3)} className={`${curr == 3 ? 'bg-blues' : 'bg-gray-300'} rounded-full`} style={{width:"10px",height:"10px"}}></button>    
            <button onClick={() => setCurr(4)} className={`${curr == 4 ? 'bg-blues' : 'bg-gray-300'} rounded-full`} style={{width:"10px",height:"10px"}}></button>    
            <button onClick={() => setCurr(5)} className={`${curr == 5 ? 'bg-blues' : 'bg-gray-300'} rounded-full`} style={{width:"10px",height:"10px"}}></button>    
        </div>       

    </div>
  )
}

export default Testimonials