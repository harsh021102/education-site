import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Aos from 'aos'
import "aos/dist/aos.css"
const Navbar = () => {
  const [menu,setMenu] = useState(0);
  useEffect(()=>{
    Aos.init({duration:"1000"})
  },[menu])
  const handleClick = () =>{
    setMenu(!menu)
  }
  return (
    <header>
    <nav className='flex justify-between md:justify-around items-center w-full py-2'>
        <h1 className='text-3xl font-lobster text-purplish ml-4 md:ml-2 '>TeachPoint</h1>
        <ul className='hidden md1:flex justify-center sm:font-light gap-4 text-lg font-bold font-outfit text-purplish h-full cursor-pointer'>
          <li data-aos="fade-down" data-aos-duration="1000">Home</li>
          <li data-aos="fade-down" data-aos-duration="1000">Services</li>
          <li data-aos="fade-down" data-aos-duration="1000">Courses</li>
          <li data-aos="fade-down" data-aos-duration="1000">Testimony</li>
        </ul>
        <button className='md:hidden p-2 rounded-xl mr-4 bg-gradient-to-b from-cyan-300 to-purplish shadow-md' onClick={handleClick}>{!menu?<GiHamburgerMenu className='text-2xl text-white'/>:<IoClose className='text-2xl text-white'/>}</button>
        <div className='hidden md:flex gap-2 justify-center items-center'>
          <button data-aos="flip-down" data-aos-duration="1000" className='hover:border-lightpurple py-2 px-4 rounded-3xl text-xl text-purplish shadow-md'>Login</button>
          <button data-aos="flip-up" data-aos-duration="1000" className='bg-gradient-to-b from-cyan-300 to-purplish  py-2 px-4 rounded-3xl text-xl text-white shadow-md'>Register</button>
        </div>
      </nav>
      <ul data-aos={menu?"fade-down":"fade-up"} data-aos-duration="500" className={menu?"absolute md1:hidden flex flex-col justify-center gap-4 text-lg font-light w-full bg-slate-100 z-10 font-outfit":"hidden sm:hidden"}>
        <li className='pt-2 pl-2'>Home</li>
        <li className='pl-2'>Services</li>
        <li className='pl-2'>Courses</li>
        <li className='pb-2 pl-2'>Testimony</li>
      </ul>
    </header>
  )
}

export default Navbar