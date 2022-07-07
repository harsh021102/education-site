import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Card from './Card'
import CardData from '../data/CardData'
const SectionTwo = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])
  return (
    <>
      <section className='relative w-full flex justify-center items-center bg-slate-100 mt-8'>
        <div className='w-11/12 grid grid-cols-2 md:grid-cols-4 my-16 gap-4'>
          <div className='col-span-2 md:row-span-2 md:col-span-1 border-2 border-lightpurple rounded-xl shadow-md'>
            <div className='flex flex-col justify-center items-start gap-8 pt-8 pb-20'>
            <h1 className='text-5xl w-5/6 md:text-4xl lg:text-5xl mx-auto'>Why choose <span className='font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-purplish'>E-Learning</span></h1>
            <p className='text-slate-600 w-5/6 md:w-10/12 font-outfit text-base md:text-lg lg:text-xl mx-auto'>Look into yourself, get something in return as your achievement.</p>
            </div>
          </div>
          {
          CardData.map((data,index)=>
          {
            return <Card key={index} image={data.image} heading={data.heading} content={data.content}/>
          }
          )
          }
        </div>
      </section>
    </>
  )
}

export default SectionTwo