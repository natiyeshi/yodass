import React from 'react'
import {BiSolidQuoteLeft as Qoute } from "react-icons/bi"

const Test = ({p,d,w,c,curr,ind}) => {
        console.log(curr,ind)
    return (

    <div style={{width:"",marginLeft:c}} className={`${curr != ind && 'max-md:opacity-30'} group w-64 duration-500 relative p-5 me-1 border-2 border-gray-400 flex-shrink-0 flex flex-col gap-4 overflow-hidden  `} >
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
  )
}

export default Test