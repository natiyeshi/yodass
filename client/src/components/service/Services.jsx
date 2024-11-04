import React from 'react'
import Box from './Box'

import Stare1 from "../../assets/star1.svg"
import Stare2 from "../../assets/Star2.svg"

const Services = () => {
  const data = [
    { btm:false, }
  ]
  return (
    <div className='px-p18 max-lg:px-4 flex flex-col  mt-12'>
        <h1 className='text-center text-xl font-bold text-blues'>Our Services</h1>
        <div className='relative grid grid-cols-2  place-items-center  max-sm:grid-cols-1 gap-10'>
            <img src={Stare1} className='absolute -left-32 top-10 ' width={"200px"} alt="" />
            <img src={Stare2} className='absolute -right-16  bottom-28 ' width={"200px"} alt="" />
            <Box />
        </div>
    </div>
  )
}

export default Services