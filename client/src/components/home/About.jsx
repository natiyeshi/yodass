import {useEffect,useState} from 'react'
import img1 from "../../assets/new/about1.jpg"
import img2 from "../../assets/new/about2.jpg"
import img3 from "../../assets/new/about3.jpg"
import img4 from "../../assets/new/about4.jpg"
import Star2 from "../../assets/star2.svg"
import css from "./css.module.css"

import { Link } from 'react-router-dom'
const About = () => {

    const [isInRange, setIsInRange] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
console.log(scrollPosition) 
        if (scrollPosition >= 240) {
          setIsInRange(true);
        } else {
          setIsInRange(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className='relative px-p18 max-md:px-4 mt-32 ' id='about'>
        
        <img src={Star2 } alt="" className='max-lg:hidden absolute -right-40 -top-16' width={"310px"} />
        <img src={Star2 } alt="" className='absolute max-lg:hidden -left-40 -bottom-36' width={"310px"} />
        
        <h1 className='font-bold text-2xl text-blues text-center'>About us</h1>
        
        <div className='flex gap-3 mt-6 max-lg:flex-col max-lg:gap-7'>
            <div className='basis-1/2 flex flex-col gap-8'>
                <p>
                  <span className='text-yellow-500 me-1 font-semibold'>
                    YODASS
                  </span>
                 is a full-service printing and digital solutions company dedicated to delivering high-quality printing, digital marketing, social media management, and website development across various industries. With a collective experience of over a decade, our team excels in utilizing state-of-the-art technology and materials. 
              </p>
              <p>
                We pride ourselves on providing 
                <span className='text-yellow-500 mx-1 font-semibold'>
                exceptional
                </span>
                 print solutions and digital services that combine durability and visual appeal, making us the trusted partner for all your needs in Ife. Our commitment to quality and client satisfaction sets us apart in the industry.
                </p>
                <Link to={"/about"} className='w-fit hover:bg-yellow-400 bg-yellows text-white text-lg px-5 py-1' style={{borderRadius:"29px"}}>READ MORE</Link>
            </div>

            <div className='flex flex-col basis-1/2 '>
                <div className='mx-auto flex justify-center'>
                    <img src={img1} className={`${isInRange && css.image1} border-2 border-yellows  w-32 h-32 md:w-40 md:h-40 rounded-full`} alt="" />
                </div>
                <div className='flex justify-around -mt-4'>
                    <img src={img2} className={ `${isInRange && css.image2} border-2 border-yellows  w-32 h-32 md:w-40 md:h-40 rounded-full`} alt="" />
                    <img src={img3} className={`${isInRange && css.image3} border-2 border-yellows  w-32 h-32 md:w-40 md:h-40 rounded-full`} alt="" />
                </div>
                <div className='mx-auto -mt-4 flex justify-center'>
                    <img src={img4} className={`${isInRange && css.image4} border-2 border-yellows  w-32 h-32 md:w-40 md:h-40 rounded-full`} alt="" />
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default About