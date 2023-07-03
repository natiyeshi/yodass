import React from 'react'
import Start1 from "../../assets/Star1.svg"
import Start2 from "../../assets/Star2.svg"

const Goal = () => {
  return (
     <div className='max-lg:px-4 px-p18'> 

        <div className='relative flex flex-col gap-10 mt-10'>

            <img src={Start1} className='max-lg:hidden absolute w-32 -left-20' alt="" />
            <img src={Start2} className='max-lg:hidden absolute w-32 bottom-0 -right-10 -z-10' alt="" />

            <div className='flex flex-col gap-3'>
                <h1 className='text-lg font-bold text-center text-blues '>Mission</h1>
                <p>
                    At our company, our mission is to provide our clients with high-quality printing services that meet their unique needs and exceed their
                    expectations. We believe that every project is an opportunity to showcase our expertise, attention to detail, and commitment to excellence,
                    and we are dedicated to delivering the best possible results for our clients.
                </p>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-lg font-bold text-center text-blues '>Vision</h1>
                <p>
                    Our vision is to be one of the most outstanding and up-to-date private limited companies in the printing and branding sector. We are 
                    constantly investing in the latest technologies and techniques to ensure that we are always at the forefront of our industry. We believe 
                    that by staying ahead of the curve, we can provide our clients with the best possible service and help them achieve their goals.
                </p>
            </div>


        </div>
        
        <div className='flex flex-col my-5 mt-14 gap-5'>

            <p className='font-bold text-blues text-center'>
                Thank you for considering our company for your printing and advertising needs. 
                We believe that our commitment to quality, innovation, and customer service sets us 
                apart from our competitors, and we look forward to the opportunity to work with you. 
                If you have any questions or would like to learn more about our services, please don't 
                hesitate to contact us.
            </p>
            <button className='w-fit mx-auto hover:bg-yellow-400 bg-yellows text-white text-lg px-5 py-1' style={{borderRadius:"29px"}}>READ MORE</button>

        </div>

        
    </div>
  )
}

export default Goal