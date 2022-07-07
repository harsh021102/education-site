import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { BsFacebook,BsInstagram,BsLinkedin,BsYoutube } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])
  return (
    <>
      <section className='relative w-full flex flex-col justify-center items-center bg-slate-100'>
        <div className='w-11/12 grid grid-cols-2 md:grid-cols-4 my-16 gap-12 mx-12 sm:mx-4 md:'>
          <div className='col-span-2 md:row-span-2 md:col-span-1 border-lightpurple rounded-xl'>
            <div className='flex flex-col justify-center items-start gap-8 pt-8 pb-20'>
            <h1 className='text-xl w-5/6 md:text-2xl lg:text-3xl mx-auto font-normal text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-purplish font-lobster'>TeachPoint</h1>
            <p className='text-slate-600 w-5/6 md:w-10/12 font-outfit text-base md:text-lg lg:text-xl mx-auto'>TeachPoint is India's largest online learning platform. Download our apps to start learning</p>
            <div>
            <p className='font-bold text-slate-800 w-5/6 md:w-10/12 font-outfit text-md md:text-lg lg:text-xl mx-auto'>Start your preperation?</p>
            <p className='font -semibold text-slate-600 w-5/6 md:w-10/12 font-outfit text-base md:text-md lg:text-lg mx-auto'>Call us and we will answer all your questions about learning on Teachpoint</p>
            <p className='font-semibold text-slate-800 w-5/6 md:w-10/12 font-outfit text-sm md:text-md lg:text-xl mx-auto mt-4 '>Call +91XXXXXXXXXX</p>
            <div className='flex gap-4 font-semibold text-slate-800 w-5/6 md:w-10/12 font-outfit text-md md:text-lg lg:text-xl mx-auto mt-4 cursor-pointer justify-start items-center'>
              <BsFacebook className='text-blue-600'/>
              <BsLinkedin className='text-blue-500'/>
              <BsInstagram className='text-pink-600'/>
              <BsYoutube className='text-red-600 text-2xl'/>
            </div>
            </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start font-outfit sm:mt-12'>
            <h1 className='text-normal font-normal text-slate-900'>Company</h1>
            <ul className='flex gap-2 flex-col text-slate-500 mt-2'>
              <li><a href="#">About</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-start font-outfit sm:mt-12'>
            <h1 className='text-normal font-normal text-slate-800'>Help & Support</h1>
            <ul className='flex gap-2 flex-col text-slate-500 mt-2'>
              <li><a href="#">User Guidelines</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Takedown Policy</a></li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-start font-outfit sm:mt-12'>
            <h1 className='text-normal font-normal text-slate-800'>Popular goals</h1>
            <ul className='flex gap-2 flex-col text-slate-500 mt-2'>
              <li><a href="#">IIT JEE</a></li>
              <li><a href="#">SSC</a></li>
              <li><a href="#">SSC</a></li>
              <li><a href="#">NEET</a></li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-start font-outfit'>
            <h1 className='text-normal font-normal text-slate-800'>Products</h1>
            <ul className='flex gap-2 flex-col text-slate-500 mt-2'>
              <li><a href="#">Learner app</a></li>
              <li><a href="#">Learner app</a>Learner app</li>
              <li><a href="#">Parent app</a></li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-start font-outfit '>
            <h1 className='text-normal font-normal text-slate-800'>Trending exams</h1>
            <ul className='flex gap-2 flex-col text-slate-500 mt-2'>
              <li><a href="#">Gate</a></li>
              <li><a href="#">NTA UGC NET</a></li>
              <li><a href="#">CAT</a></li>
              <li><a href="#">CA</a></li>
              <li><a href="#">Bank Exams</a></li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-start font-outfit '>
            <h1 className='text-normal font-normal text-slate-800'>Study material</h1>
            <ul className='flex gap-2 flex-col text-slate-500 mt-2'>
              <li><a href="#">UPSC Study Material</a></li>
              <li><a href="#">NEET UG Study Material</a></li>
              <li><a href="#">CA Foundation Study Material</a></li>
              <li><a href="#">JEE Study Material</a></li>
              <li><a href="#">SSC Study Material</a></li>
            </ul>
          </div>
        </div>
        <div className='w-full flex justify-center items-center py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-outfit'><AiOutlineCopyrightCircle/> Created by Harsh Pratap Singh</div>
      </section>
    </>
  )
}

export default Footer