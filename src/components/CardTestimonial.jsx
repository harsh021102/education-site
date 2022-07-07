import React from 'react'
const Card = ({image,heading,content}) => {
  return (
    <div className='flex-1 flex flex-col border-2 shadow-md justify-center items-center bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-xl'>
        <img src={image} alt="" className='w-5/12 border-full mt-16 rounded-full bg-cover bg-center bg-no-repeat bg-red-200' />
        <h1 className='text-2xl sm:text-3xl my-4 w-full font-bold md:text-4xl text-center font-outfit text-white'>{heading}</h1>
        <p className='my-4 w-full text-md md:text-lg lg:text-md pb-8 text-slate-60 text-center font-outfit text-white px-2'>"{content}"</p>
    </div>
  )
}

export default Card