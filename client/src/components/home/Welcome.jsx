import React from 'react'
import Logo from "../../assets/Frame.svg"
import Star1 from "../../assets/Star1.svg"
import css from "./css.module.css"

const Welcome = () => {
  return (
    <div className='relative px-p18 max-md:px-4 flex max-md:flex-col gap-10  max-md:pt-12 pt-32' >
        <img src={Star1 } alt="" className='max-lg:hidden absolute -left-40 top-0' width={"320px"} />
        <img src={Star1 } alt="" className='max-lg:hidden absolute -right-44 -bottom-36' width={"320px"} />
        <div className='my-auto  basis-1/2 h-full flex flex-col  gap-5'>
            <h1 className='text-xl font-semibold text-blues'>Hello and welcome to <span className='text-yellows'>YODASS!</span> </h1>
            <p>
                We're a printing company that's dedicated to helping you make
                a lasting impression. Our portfolio showcases our passion for 
                high-quality prints and designs, and we're excited to bring your ideas 
                to life. With our state-of-the-art equipment and attention to detail, we
                guarantee that your prints will be of the highest quality. 
                <p className='mt-2'>
                    We use only the best materials and inks, ensuring that your prints are
                    durable, long-lasting, and visually stunning. Let's work together to create 
                    something special.
                </p>
            </p>
            <button className='w-fit hover:bg-yellow-400 bg-yellows text-white text-lg px-5 py-1' style={{borderRadius:"29px"}}>MORE</button>
        </div>

        <div className=' basis-1/2 flex md:justify-end justify-center'>
            <img src={Logo} className={css.img1} width={"300px"} alt="" />
        </div>
    </div>
  )
}

export default Welcome