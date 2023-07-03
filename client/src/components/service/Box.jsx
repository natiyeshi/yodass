import React from 'react'

import png1 from "../../assets/ion_bulb.svg"
import png2 from "../../assets/solar_display-bold.svg"
import png3 from "../../assets/teenyicons_sign-solid.svg"
import png4 from "../../assets/bi_house-gear-fill.svg"

import img1 from "../../assets/unsplash_PtabTe6iJ_8 (1).png"
import img2 from "../../assets/unsplash_PtabTe6iJ_8.png"
import img3 from "../../assets/unsplash_LPWl2pEVGKc.png"
import img4 from "../../assets/unsplash_Tzm3Oyu_6sk.png"


const Box = ({btm}) => {
  return (
    <div className={ `${btm == true && 'lg:translate-y-20'} max-sm:mx-auto py-7 relative border-2 w-5/6 px-3 flex flex-col gap-8 mt-20 `}>
        <img src={img1} alt="" className='absolute w-1/3 rounded-full -top-16 left-1/3' />
        
        <div className='flex gap-3 mt-20'>
            <img src={png1} className='w-10 p-1 h-10 border-2 border-yellows rounded-full' alt="" />
            <h1 className='my-auto  text-lg font-bold text-blues'>LED Lighting Letters</h1>
        </div>

        <div className='flex flex-col gap-1 pb-4'>
            <div className='flex gap-3'> 
                <div className='w-2 my-auto h-2 rounded-full bg-gray-400 '> </div> <p>Energy-efficient</p> 
            </div>
            <div className='flex gap-3'> 
                <div className='w-2 my-auto h-2 rounded-full bg-gray-400 '> </div> <p>Long-lasting</p> 
            </div>
            <div className='flex gap-3'> 
                <div className='w-2 my-auto h-2 rounded-full bg-gray-400 '> </div> <p>Versatile</p> 
            </div>
            <div className='flex gap-3'> 
                <div className='w-2 my-auto h-2 rounded-full bg-gray-400 '> </div> <p>Bright and eye-catching</p> 
            </div>
            <div className='flex gap-3'> 
                <div className='w-2 my-auto h-2 rounded-full bg-gray-400 '> </div> <p>Environmentally friendly</p> 
            </div>
            
        </div>
        
    </div>
  )
}

export default Box