import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import CardTestimonial from './CardTestimonial'
import Testimonialdata from '../data/Testimonialdata'
const Testimonials = () => {
  useEffect(()=>{
    Aos.init({duration: 500});
  },[])
  return (
    <div className='w-full flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div class="mx-auto my-12 md:my-24 sm:my-36 flex justify-center  w-5/6 gap-8 flex-col">
        <h1 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold font-outfit'>Hear it from our students</h1>
        <div data-aos="zoom-in" data-aos-delay="50" data-aos-easing="ease-in-out" className='flex justify-between items-center gap-2 flex-col md:flex-row'>
            {
                Testimonialdata.map((data,index)=>
                <CardTestimonial key={index} image={data.image} heading={data.heading} content={data.content}/>
                )
            }
        </div>
    </div>
    </div>
  )
}

export default Testimonials