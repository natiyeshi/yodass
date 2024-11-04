import React from 'react'
import Start1 from "../../assets/star1.svg"
import Start2 from "../../assets/star2.svg"

import { Link } from 'react-router-dom'

const Goal = () => {
  return (
     <div className='max-lg:px-4 px-p18'> 

        <div className='relative flex flex-col gap-10 mt-10'>

            <img src={Start1} className='max-lg:hidden absolute w-32 -left-20' alt="" />
            <img src={Start2} className='max-lg:hidden absolute w-32 bottom-0 -right-10 -z-10' alt="" />

            <div className='flex flex-col gap-3'>
                <h1 className='text-lg font-bold text-center text-blues '>Mission</h1>
                <p>
                At YODASS, our mission is to deliver high-quality printing services that cater to our clients' unique needs and exceed their expectations. We view every project as an opportunity to demonstrate our expertise, attention to detail, and commitment to excellence, ensuring the best possible results for our clients.
                </p>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-lg font-bold text-center text-blues '>Vision</h1>
                <p>
                    Our vision is to be a leading and innovative private limited company in the printing and branding sector. By continually investing in the latest technologies and techniques, we aim to stay at the forefront of the industry, providing our clients with exceptional service and helping them achieve their goals.
                </p>
            </div>


        </div>
        
        <div className='flex flex-col my-5 mt-14 gap-5'>

            <p className='font-bold text-blues text-center px-2 bg-yellow-400/60 py-2 rounded-lg'>
                Thank you for considering our company for your printing and advertising needs. 
                We believe that our commitment to quality, innovation, and customer service sets us 
                apart from our competitors, and we look forward to the opportunity to work with you. 
                If you have any questions or would like to learn more about our services, please don't 
                hesitate to contact us.
            </p>
            <Link to={"/contact"} className='w-fit mx-auto hover:bg-yellow-400 bg-yellows text-white text-lg px-5 py-1' style={{borderRadius:"29px"}}>Contact us Now</Link>

        </div>

        
    </div>
  )
}

export default Goal