import React from 'react'
import {BiSolidQuoteLeft as Qoute } from "react-icons/bi"

const Test = ({p,d,w,c,curr,ind}) => {
    return (
<div className='min-w-0 flex-shrink-0 flex-grow-0 pe-4 mad-sm:pe-0 basis-1/3 max-lg:basis-1/2  max-md:basis-full'>

    <div className={`group  duration-500 relative p-5 me-1 border-2 border-gray-400 w-full flex flex-col gap-4 overflow-hidden  `} >
        <div className='absolute mb-5 -left-16 -top-16  border-2 border-blues bg-blues bg-opacity-10 duration-100 group-hover:shadow-xl shadow-gray-300 rounded-full flex' style={{height:"150px",width:"150px"}}>
            <Qoute className='ml-24 mt-24 text-blues text-xl' />
        </div>      
        
        <p className='mt-24'>
          {d}
        </p>  
        
        <div className='mt-5  font-bold'>
            <h1 className='text-center text-blues'>{p}</h1>
            <p className='text-center'>
                {w}
            </p>
        </div>

    </div>
</div>

  )
}

export default Test