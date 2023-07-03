import React from 'react'

import img1 from "../../assets/image 9.png"
import img2 from "../../assets/image 10.png"
import img4 from "../../assets/image 12.png"
import img5 from "../../assets/image 13.png"
import img6 from "../../assets/image 14.png"
import img7 from "../../assets/image 15.png"
import img8 from "../../assets/image 16.png"
import img9 from "../../assets/image 17.png"
import img10 from "../../assets/image 18.png"

import Star1 from "../../assets/Star1.svg"
import Star2 from "../../assets/Star2.svg"

const Samples = () => {
  return (
    <div className='relative px-p18 max-lg:px-4  mt-32 overflow-hidden'>
       
        <img src={Star1} className='max-lg:hidden absolute left-24  top-0 ' width={"200px"} alt="" />
        <img src={Star2} className='max-lg:hidden absolute right-32  top-20 ' width={"200px"} alt="" />
       
        <h1 className='font-bold text-xl text-blues text-center'>Sample Works</h1>
        <div className=' grid grid-cols-3 max-md:flex max-md:flex-col gap-2 mt-10'>
            <div className='grid gap-2 max-md:flex max-md:flex-col '>
                <img src={img1}  className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer' alt="" />
                <img src={img2}  className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer' alt="" />
                <img src={img4}  className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer' alt="" />
            </div>
            <div className='md:translate-y-10 grid gap-2 max-md:flex max-md:flex-col '>
                <img src={img5}  className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer' alt="" />
                <img src={img6}  className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer' alt="" />
                <img src={img7}  className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer' alt="" />
            </div>
            <div className='md:translate-y-20 grid gap-2 max-md:flex max-md:flex-col '>
                <img src={img8}  className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer' alt="" />
                <img src={img9}  className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer' alt="" />
                <img src={img10} className='w-80 max-md:w-full duration-200 hover:-translate-y-2 cursor-pointer'  alt="" />
            </div>
        </div>
    </div>
  )
}

export default Samples