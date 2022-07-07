import React, { useEffect } from 'react'
import classroom from '../images/class.svg'
import Aos from 'aos'
import "aos/dist/aos.css"
const SectionFour = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])
  return (
    <>
      <section className=' relative w-full flex justify-center items-center'>
        <div className='w-10/12 md:w-full 
        lg:w-10/12 flex justify-center flex-col md:flex-row my-16 gap-12'>
          <img data-aos="zoom-in" src={classroom} alt="" className=' flex mx-auto w-5/6 md1:w-5/12 justify-center items-center bg-center bg-cover'/>
          <div className='relative flex-1 flex justify-center items-center flex-col '>
            <div className="font-outfit md1:w-full flex  flex-col gap-2 justify-center items-start">
            <h1 data-aos="fade-left" className=" text-4xl w-5/6 md:text-4xl lg:text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-purplish font-lobster">Teach Point</h1>
            <h1 data-aos="fade" className='mt-4 text-3xl w-5/6 md:text-4xl lg:text-5xl  font-bold'> A Blended Solution For The New Normal</h1>
            <p data-aos="fade" className='mt-4 w-full md:w-10/12 font-outfit text-base md:text-lg lg:text-xl text-slate-600'>Teachpoint is an engaging blend of traditional and online learning for giving students best e-learning platform in this new normal.</p>
            <button className='w-6/12 md:w-4/12 mt-4 bg-gradient-to-b from-cyan-300 to-purplish py-4 rounded-xl text-md md1:text-2xl shadow-md hover:scale-105 transition-all text-white'>View our centers</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionFour