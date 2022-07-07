import React from 'react'

const Card = ({image,heading,content}) => {
  return (
    <div data-aos="fade-down" className='flex flex-col border-2 border-lightpurple rounded-xl shadow-md'>
        <img src={image} alt="" className='w-3/6 border-full ml-4 mt-8' />
        <h1 className='text-2xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-purplish mt-4 w-full font-bold md:text-3xl lg:text-3xl pl-4'>{heading}</h1>
        <p className='mt-4 w-full md:w-10/12 font-outfit text-base md:text-md lg:text-md pb-8 pl-4 text-slate-600'>{content}</p>

    </div>
  )
}

export default Card