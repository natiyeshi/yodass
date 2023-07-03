import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from "../../assets/Logo.svg"
import { FiMenu as Menu } from "react-icons/fi"
import {AiOutlineClose as Close } from "react-icons/ai"
import css from "./css.module.css"

const Nav = ({cls}) => {
  const [tog,setTog] = useState(true)
  const common = "duration-200 border-b-2 border-transparent md:hover:border-yellows "
  const checkActive = ({isActive}) => isActive ?  common + "text-yellows font-semibold " : common 
  return (
    <div className={` w-full text-white bg-blues py-4 flex p-p18 max-lg:p-4 max-md:flex-col justify-between ${cls} `}> 
        <div className='flex gap-3 text-xl font-bold my-auto'>
            <img src={Logo} width={"30px"} alt="" className='my-auto'/>
            <h1 className='my-auto'>YODASS</h1> 
        </div>
        {tog ? 
            <Menu className="absolute right-8 md:hidden text-3xl"  onClick={() => {setTog(false)}}/> :
            <Close className='absolute right-8 md:hidden text-3xl' onClick={() => {setTog(true)}} /> 
        }
        <div className={` ${tog ? 'max-md:h-0 max-md:translate-x-96' : 'flex max-md:translate-x-0  max-md:mt-5'}  duration-200 text-xs flex uppercase gap-7 my-auto max-md:flex-col max-md:me-5 max-md:text-right `}>
            <NavLink onClick={()=>{setTog(true)}} to="/" className={checkActive} >Home</NavLink>
            <NavLink onClick={()=>{setTog(true)}} to="/about" className={checkActive} >About</NavLink>
            <NavLink onClick={()=>{setTog(true)}}  to="/service" className={checkActive} >Our Service</NavLink>
            <NavLink onClick={()=>{setTog(true)}} to="/contact" className={checkActive} >Contact Us</NavLink>
        </div>
    </div>
  )
}

export default Nav