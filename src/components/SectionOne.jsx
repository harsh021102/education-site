import React, { useEffect } from 'react'
import maths from '../images/Mathematics.gif'
import Aos from 'aos'
import "aos/dist/aos.css"
const SectionOne = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])
  return (
    <>
      <section className=' relative w-full flex justify-center items-center'>
        <div className='w-10/12 md:w-full 
        lg:w-10/12 flex justify-center flex-col-reverse md:flex-row'>
          <div className='relative flex-1 flex justify-center items-center flex-col '>
            <div className="font-merri md1:w-full md:h-5/6 flex flex-col gap-2 justify-center ">
            <h1 data-aos="slide-right" className='mt-4 text-3xl w-5/6 md:text-4xl lg:text-5xl md:ml-12'>Investing in knowledge and</h1>
            <h1 data-aos="slide-right" className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-purplish text-4xl w-5/6 md:text-4xl lg:text-5xl  md:ml-12">Your Future</h1>
            <p data-aos="fade" className='text-black mt-4 w-full md:w-10/12 font-outfit text-base md:text-lg lg:text-xl md:ml-12'>With the help of E-learning, create your own path and drive on you skills on your own to achieve what you seek</p>
            <button className='w-6/12 md:w-4/12 mt-4 bg-gradient-to-b from-cyan-300 to-purplish py-4 rounded-3xl text-xl shadow-lg text-white md:ml-12 hover:scale-105 transition-all'>Enroll Now</button>
            </div>
          </div>
          <img src={maths} alt="" className='flex-1 flex mx-auto w-5/6 md1:w-96 justify-center items-center bg-center bg-cover'/>
        </div>
      </section>
    </>
  )
}

export default SectionOne