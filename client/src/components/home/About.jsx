import {useEffect,useState} from 'react'
import img1 from "../../assets/unsplash_PtabTe6iJ_8 (1).png"
import img2 from "../../assets/unsplash_PtabTe6iJ_8.png"
import img3 from "../../assets/unsplash_LPWl2pEVGKc.png"
import img4 from "../../assets/unsplash_Tzm3Oyu_6sk.png"
import Star2 from "../../assets/Star2.svg"
import css from "./css.module.css"


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
    <div className='relative px-p18 max-md:px-4 mt-32 ' id='a'>
        
        <img src={Star2 } alt="" className='max-lg:hidden absolute -right-40 -top-16' width={"310px"} />
        <img src={Star2 } alt="" className='absolute max-lg:hidden -left-40 -bottom-36' width={"310px"} />
        
        <h1 className='font-bold text-xl text-blues text-center'>About us</h1>
        
        <div className='flex gap-3 mt-6 max-lg:flex-col max-lg:gap-7'>
            <div className='basis-1/2 flex flex-col gap-8'>
                <p>
                    Our company was founded in <span className='text-yellows'>2014</span>  and since its creation
                    company has been able to acquire many clients by
                    delivering works in the expected quality innovation and
                    based on principle of honesty resulting the company's
                    current achievement to have its own sufficient working
                    capita and number of clients. We committee our self's
                    to maintain our reputation among clients and to capacitate
                    our service both in terms of <span className='text-yellows'> knowledge</span>  and 
                    <span className='text-yellows'> competency </span>
                    working towards more success.
                </p>
                <button className='w-fit hover:bg-yellow-400 bg-yellows text-white text-lg px-5 py-1' style={{borderRadius:"29px"}}>READ MORE</button>
            </div>

            <div className='flex flex-col basis-1/2 '>
                <div className='mx-auto flex justify-center'>
                    <img src={img1} className={`${isInRange && css.image1} w-4/6 max-md:w-10/12  max-sm:w-8/12 rounded-full`} alt="" />
                </div>
                <div className='flex justify-around -mt-4'>
                    <img src={img2} className={ `${isInRange && css.image2} w-4/12 max-md:w-4/12 max-sm:w-5/12 rounded-full`} alt="" />
                    <img src={img3} className={`${isInRange && css.image3} w-4/12 max-md:w-4/12 max-sm:w-5/12 rounded-full`} alt="" />
                </div>
                <div className='mx-auto -mt-4 flex justify-center'>
                    <img src={img4} className={`${isInRange && css.image4} w-4/6 max-md:w-10/12 max-sm:w-8/12 rounded-full`} alt="" />
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default About