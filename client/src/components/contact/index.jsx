import React from 'react'
import {BsFillTelephoneFill as Phone } from "react-icons/bs"
import {AiOutlineMail as Mail } from "react-icons/ai"
import {HiLocationMarker as Locations } from "react-icons/hi"
import Footer from '../home/Footer'

import Star1 from "../../assets/Star1.svg"
import Star2 from "../../assets/Star2.svg"

const index = () => {
  return (
    <div className='relative mt-10 overflow-hidden'>
        <img src={Star1} className='max-lg:hidden absolute -left-44' alt="" />
        <img src={Star2} className='max-lg:hidden absolute -right-44  bottom-96 z-10' alt="" />

        <div className='px-p18  max-lg:px-4 '>
            <h1 className='text-xl font-bold text-blues text-center'>Contact us</h1>
            <h1 className='text-lg font-semibold text-blues text-center mt-5'>Office</h1>
            <div className='flex mt-12 max-md:flex-col'>
                
                <div className='basis-1/2 flex flex-col gap-3 my-auto font-semibold'>
                    <div className='flex gap-3'>
                        <Phone className='text-lg my-auto text-yellows' />
                        <div className='flex flex-col'>
                            <p>+251 11 823 5767</p>
                            <p>+251 913 030 439</p> 
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <Mail className='text-xl my-auto text-yellows'/>
                        <p>yodassinfo@gmail.com</p>
                        
                    </div>
                    <div className='flex gap-3'>
                        <Locations className='text-xl my-auto text-yellows'/>
                    <p> Piassa Limat Ledget BLDG. 1st Floor NO 137A</p>
                    </div>

                </div>

                <div className='grow max-md:mt-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1422554903787!2d38.75918275420193!3d9.011743946684845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8511382c3c7b%3A0xc133da741c1d8dc5!2sAwash%20Bank%20Stadium%20Branch!5e0!3m2!1sen!2sus!4v1688299422161!5m2!1sen!2sus"
                     width="100%" height="400px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            
        </div>

        <div className='mt-20 px-p18 max-lg:px-4'>
            <h1 className='text-lg font-semibold text-blues text-center mt-5'>Workshop</h1>
            <div className='flex mt-12 gap-10  max-md:flex-col'>

                <div className='basis-1/2'>
                    <iframe className='border' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1422554903787!2d38.75918275420193!3d9.011743946684845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8511382c3c7b%3A0xc133da741c1d8dc5!2sAwash%20Bank%20Stadium%20Branch!5e0!3m2!1sen!2sus!4v1688299422161!5m2!1sen!2sus" width="100%" height="400px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                <div className='basis-1/2 flex flex-col gap-3 my-auto font-semibold'>
                    <div className='flex gap-3'>
                        <Phone className='text-lg my-auto text-yellows' />
                        <div className='flex flex-col'>
                        <p>
                            +251 949 493 848
                        </p> 
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <Mail className='text-xl my-auto text-yellows'/>
                        <p>yodassinfo@gmail.com</p>
                        
                    </div>
                    <div className='flex gap-3'>
                        <Locations className='text-xl my-auto text-yellows'/>
                        <p> 
                            Sululta Weserbi behind yaya athletics village
                            workshop
                        </p>
                    </div>

                </div>


            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default index