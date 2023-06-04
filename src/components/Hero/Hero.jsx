import React from 'react'
import { heroapi } from '../../Data/data'
import { NavLink } from 'react-router-dom';
const { img, sociallinks, videos } = heroapi;
const Hero = () => {
  return (
    <div className="relative h-auto w-auto flex flex-col">
      <div className="absolute bg-theme left-0 right-0 top-0 clip-path h-[78vh] lg:h-[75vh] md:h-[60vh] sm:[50vh] xsm:[45vh] w-auto opacity-100 z-10"></div>
      <div className='relative opacity-100 z-20 grid items-center justify-items-center w-11/12'>
        <div className='grid items-center justify-items-center mt-28 md:mt-36 md:ml-2'>
          <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>Play With Electric Nike</h1>
          <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>Adapt 2.0 Sneakers</h1>
          <NavLink to='/productlist'>
            <button type='button' className='button-theme bg-slate-200 shadow-slate-200 rounded-md my-5'>
              Explore Products
            </button>
          </NavLink>  
            
          <div>
            {/* videos */}
           
          </div>
          <div>
            {/* socials */}
          </div>
          <div className='flex items-center'>
            {/* image */}
            <img src={img} alt="hero-img/img" 
            className='w-auto h-[35vh] lg:h-[25vh] md:h[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero