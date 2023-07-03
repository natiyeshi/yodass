import React from 'react'
import Box from './Box'

import Stare1 from "../../assets/Star1.svg"
import Stare2 from "../../assets/Star2.svg"

const Services = () => {
  return (
    <div className='px-p18 max-lg:px-4   mt-12'>
        <h1 className='text-center text-xl font-bold text-blues'>Our Services</h1>
        <div className='relative grid grid-cols-2 max-sm:grid-cols-1 gap-10'>
            <img src={Stare1} className='absolute -left-32 top-10 ' width={"200px"} alt="" />
            <img src={Stare2} className='absolute -right-16  bottom-28 ' width={"200px"} alt="" />
            <Box />
            <Box  btm={true}/>
            <Box />
            <Box  btm={true}/> 
        </div>
    </div>
  )
}

export default Services