import React from 'react'
import Box from './Box'
import img1 from "../../assets/ion_bulb.svg"
import img2 from "../../assets/solar_display-bold.svg"
import img3 from "../../assets/teenyicons_sign-solid.svg"
import img4 from "../../assets/bi_house-gear-fill.svg"
import img5 from "../../assets/icon-park_ad-product.svg"
import img6 from "../../assets/ph_flag-banner-fill.svg"
import Star1 from "../../assets/Star1.svg"

import { FaGlobe } from "react-icons/fa"
import { FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Service = () => {
  let data = [
    {h : "LED Lighting Letters" , p:"Eye-catching, energy-efficient, and durable LED lighting letters.", img:img1} ,
    {h : "House Interior" , p:"Creating a warm and inviting atmosphere with our LED lighting fixtures.",img:img4},
    {h : "Promotional Items" , p:"Custom promotional items to increase brand awareness and attract new customers.",img:img2},
    {h : "Banner and Sticker" , p:"Eye-catching banners and stickers to promote your business or event.",img:img3},
    {h : "Signage" , p:"Indoor and outdoor signs, directional signs, and more.",img:img5},
    {h : "Light Box" , p:"Perfect for advertising, displaying products, or promoting services.",img:img6},
  ]
  const boxes = data.map(val => <Box h={val.h} p={val.p} img={val.img} />)
  return (
    <div className='relative max-md:px-4 px-p18 mt-32  flex flex-col gap-8'>
        <img src={Star1 } alt="" className='max-md:hidden absolute -left-40 top-0' width={"320px"} />
        <img src={Star1 } alt="" className='max-md:hidden absolute -right-40 -bottom-40' width={"320px"} />

        <h1 className='text-xl text-blues font-bold text-center '>Our Services</h1>
        <p>At YODASS, we are dedicated to providing high-quality LED lighting solutions and signage services to our clients. Our range of services includes:</p>
        
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 flex-wrap gap-3'>
            {boxes}  
            <div className='group border-2 max-md:basis-4/1  border-gray-400 py-3 px-6 flex flex-col gap-3 duration-100 cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:-translate-y-2 hover:duration-150'>
              <FaGlobe  size={40} className='border rounded-full group-hover:duration-700 group-hover:rotate-180 group-hover:bg-white p-2 border-yellows text-yellows' />
              {/* <img src={img} width={"50px"} alt="" /> */}
              <h1 className='text-lg font-bold text-blues'>Website Development</h1>
              <p className=' max-w-xs'>
                Crafting responsive, user-friendly, and scalable websites that drive engagement and deliver exceptional user experiences.
              </p>
          </div>  
          <div className='group border-2 max-md:basis-4/1  border-gray-400 py-3 px-6 flex flex-col gap-3 duration-100 cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:-translate-y-2 hover:duration-150'>
              <FaShareAlt  size={40} className='border rounded-full group-hover:duration-700 group-hover:rotate-180 group-hover:bg-white p-2 border-yellows text-yellows' />
              {/* <img src={img} width={"50px"} alt="" /> */}
              <h1 className='text-lg font-bold text-blues capitalize'>social Media Management</h1>
              <p className=' max-w-xs'>
              Building and managing your brand’s online presence through strategic content, engagement, and data-driven insights across all major platforms.
                </p>
          </div>        
        </div>
        <Link to={"/service"} className='w-fit mx-auto hover:bg-yellow-400 bg-yellows text-white text-lg px-5 py-1' style={{borderRadius:"29px"}}>READ MORE</Link>


    </div>
  )
}

export default Service