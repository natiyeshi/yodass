import React from 'react'

const Box = ({img,h,p}) => {
  return (
    <div className='group border-2 max-md:basis-4/1  border-gray-400 py-3 px-6 flex flex-col gap-3 duration-100 cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 hover:-translate-y-2 hover:duration-150'>
        <img src={img} width={"50px"} alt="" className='border rounded-full group-hover:duration-700 group-hover:rotate-180 group-hover:bg-white p-2 border-yellows' />
        <h1 className='text-lg font-bold text-blues'>{h}</h1>
        <p className=' max-w-xs'>
            {p}
        </p>
    </div>
  )
}

export default Box