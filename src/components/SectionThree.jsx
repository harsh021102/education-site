import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const SectionThree = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
      },[])
  return (
    <>
    <section className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 font-outfit'>
        <div className='flex justify-center items-center flex-col'>
            <div className='w-11/12 mt-12'>
                <h1 data-aos="fade-down" className='font-bold text-white text-4xl text-center py-4 md:py-8 md:text-6xl  bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-xl'>India's Most Loved Educational Platform</h1>
                <p data-aos="fade-bottom" className='font-normal text-white text-2xl md:text-4xl text-center py-8 md:py-12'>With TeachPoint, Begin your journey to success.</p>
            </div>
            <div data-aos="fade-down" data-aos-delay="500" className='text-center mx-auto grid grid-cols-2 w-11/12 md:w-5/12 mt-4 mb-12 gap-2 md:gap-2 '>
                <div className='row-span-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-xl py-4 px-2'>
                    <h1 className='font-bold text-white text-4xl md:text-5xl text-center py-2'>6 M+</h1>
                    <p className='font-light text-white text-2xl md:text-4xl text-center pb-4'>Happy students</p>
                </div>
                <div className='row-span-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-xl p-4'>
                    <h1 className='font-bold text-white text-4xl md:text-5xl text-center py-2'>13700 +</h1>
                    <p className='font-light text-white text-2xl md:text-4xl text-center pb-4'>Video Lectures</p>
                </div>
                <div className='row-span-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-xl p-8'>
                    <h1 className='font-bold text-white text-4xl md:text-5xl text-center py-2'>2500 +</h1>
                    <p className='font-light text-white text-2xl md:text-4xl text-center pb-4'>Mock Test</p>
                </div>
                <div className='row-span-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-xl p-8'>
                    <h1 className='font-bold text-white text-4xl md:text-5xl text-center py-2'>70000 +</h1>
                    <p className='font-light text-white text-2xl md:text-4xl text-center pb-4'>Questions</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SectionThree