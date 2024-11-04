import React from 'react'
import img1 from "../../assets/unsplash_PtabTe6iJ_8 (1).png"
import img2 from "../../assets/unsplash_PtabTe6iJ_8.png"
import img3 from "../../assets/unsplash_LPWl2pEVGKc.png"
import img4 from "../../assets/unsplash_Tzm3Oyu_6sk.png"
import Start1 from "../../assets/star1.svg"
import Start2 from "../../assets/star2.svg"

const First = () => {
  return (
    <div className='relative px-p18 max-lg:px-4'>

        <img src={Start1} width={"180px"} className='max-lg:hidden absolute top-48 left-4 ' alt="" />
        <img src={Start2} width={"180px"} className='max-lg:hidden  absolute bottom-48 right-4 ' alt="" />

        <h1 className='text-center text-xl font-bold mt-20 max-lg:mt-10 text-blues'> About Us </h1>

        <div className='flex flex-col gap-3 max-md:mt-8'>
                    
                    <div className='flex gap-1 mt-3   max-lg:gap-3 max-sm:flex-col'>
                       <div className=' basis-1/4 max-lg:my-auto '>
                            <img src={img2} className='rounded-full max-lg:w-full  w-5/6 max-sm:w-1/2 max-md:mx-auto '  alt="" />
                        </div>
                        <p className='my-8 basis-2/3 '>
                            At our company, we take pride in our commitment to delivering 
                            <span className='text-yellows'> high-quality </span>  
                            work and exceptional customer service. Since our founding 
                            in 2014, we have built a reputation for honesty, innovation, and 
                            reliability, which has allowed us to grow our client base and establish 
                            a strong financial foundation.
                        </p>
                    </div>

                    <div className='flex gap-2 mt-3  max-lg:gap-3 max-sm:flex-col-reverse'>
                        <p className='my-8 basis-2/3'>
                            We believe that our success is a direct result of our focus on maintaining
                            our reputation among our <span className='text-yellows'>  clients </span> and 
                            <span className='text-yellows'> continuously</span>  improving our 
                            knowledge and competency. As we continue to grow and evolve, we are 
                            dedicated to working towards even greater success, while always putting 
                            our clients' needs first.
                        </p>
                        <div className=' basis-1/4 '>
                            <img src={img4} className='mx-auto rounded-full max-lg:w-full  w-5/6 max-sm:w-1/2 max-md:mx-auto '  alt="" />
                        </div>
                    </div>

                    <div className='flex gap-2 mt-3  max-lg:gap-3 max-sm:flex-col'>
                        <div className=' basis-1/4'>
                            <img src={img1} className='rounded-full max-lg:w-full  w-5/6 max-sm:w-1/2 max-md:mx-auto'  alt="" />
                        </div>
                        <p className='my-8 basis-2/3'>
                            At our core, we are a team of dedicated professionals who are 
                            passionate about what we do. We are committed to providing our 
                            clients with the <span className='text-yellows'> best possible experience , </span>  and we believe that our 
                            attention to detail, expertise, and personalized approach set us apart 
                            from our competitors.
                        </p>
                    </div>

                    <div className='flex gap-2 mt-3  max-lg:gap-3 max-sm:flex-col-reverse'>
                        <p className='my-8 basis-2/3'>
                            At our company, we understand the importance of staying up-to-date 
                            with the latest industry trends and technologies. That's why we invest 
                            heavily in  <span className='text-yellows'> training and development </span>  for our team, ensuring that we have
                            the knowledge and skills needed to provide our clients with the best 
                            possible service. We are constantly learning and growing, and we are 
                            committed to staying at the forefront of our industry.
                        </p>
                        <div className=' basis-1/4 '>
                            <img src={img3} className='mx-auto rounded-full max-lg:w-full  w-5/6 max-sm:w-1/2 max-md:mx-auto '  alt="" />
                        </div>
                    </div>


                
        </div>

    </div>
  )
}

export default First