import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsFacebook as Fb,BsTelegram as Tg, BsInstagram as Insta} from "react-icons/bs"
import Pattern from "../../assets/Pattern.svg"


const Footer = () => {
  return (
    <div className='relative px-p18 max-md:px-4 mt-20 bg-blues text-white flex flex-cols max-md:grid max-md:gap-10  justify-around  py-10'>
            
            <img src={Pattern} className='max-md:hidden absolute -left-10 -bottom-10' width={"220px"} alt="" />
            
            <div className='flex flex-col gap-4 basis-1/4'>
                <h1 className='font-bold text-lg text-yellows'> Information </h1>
                <div className='uppercase flex flex-col mt-2 gap-1.5'>
                    <NavLink to={"/"} className='hover:text-yellows duration-100 hover:translate-x-1 hover:font-bold' >Home</NavLink >
                    <NavLink to={"/about"} className='hover:text-yellows duration-100 hover:translate-x-1 hover:font-bold'>About us</NavLink >
                    <NavLink to={"/service"} className='hover:text-yellows duration-100 hover:translate-x-1 hover:font-bold'>our service</NavLink >
                    <NavLink to={"/contact"} className='hover:text-yellows duration-100 hover:translate-x-1 hover:font-bold'>contact us</NavLink >
                </div>
            </div>
            
            <div className='flex flex-col gap-4 grow'>
                <h1 className='text-lg font-bold text-yellows'>Contact us</h1>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex gap-2'> 
                        <span className='w-1 h-1 bg-white rounded-full my-auto'></span> 
                        <p>Yodassgeneralbusiness@gmail.com</p>
                    </div>

                    <div className='flex gap-2'> 
                        <span className='w-1 h-1 bg-white rounded-full my-auto'></span> 
                        <p>+251913030439</p>
                    </div>

                    <div className='flex gap-2'> 
                        <span className='w-1 h-1 bg-white rounded-full my-auto'></span> 
                        <p>+251949493848</p>
                    </div>

                    <div className='flex gap-2'> 
                        <span className='w-1 h-1 bg-white rounded-full my-auto'></span> 
                        <p>+251118235767</p>
                    </div>

                    
                    <div className=''> 
                        <div className='flex gap-3'>
                            <p className='flex gap-2'>
                                <span className='w-1 h-1 bg-white rounded-full my-3'> </span> 
                                Office  -   </p>   
                            <p className='basis-2/3'>
                             Piassa Limat Ledget BLDG.
                                1st Floor NO 137A
                            </p>
                            
                        </div>
                    </div>

                    <div className=''> 
                        <div className='flex gap-3'>
                            <p className='flex gap-2'>
                                <span className='w-1 h-1 bg-white rounded-full my-3'> </span> 
                                Workshop  -   </p>   
                            <p className='basis-2/3'>
                                Sululta Weserbi behind yaya      
                                athletics village workshop
                            </p>
                            
                        </div>
                    </div>


                </div>
            </div>
        
            <div className='flex flex-col gap-3 basis-1/4'>
                <h1 className='text-lg font-bold text-yellows'>Follow Us</h1>
                <p>Follow us on our social medias</p>
                <div className='flex mt-3 gap-5 '>
                    <a href="">
                        <Fb className='text-2xl text-yellows duration-100 hover:scale-110 ' />
                    </a>
                    <a href="">
                        <Tg className='text-2xl text-yellows duration-100 hover:scale-110 ' />
                    </a>
                    <a href="">
                        <Insta className='text-2xl text-yellows duration-100 hover:scale-110 ' />
                    </a>

                </div>
            </div>
    </div>
  )
}

export default Footer