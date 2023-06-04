import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({isHighlight, contentData: {heading, title, text, btn, url, img}}) => {

  return (
    <div className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container my-20 ${isHighlight ? "flex-row-reverse" : "flex-row"}`}>
      <div className='grid items-center text-start max-w-lg lg:max-w-none w-full md:text-center lg:justify-items-center'>
        <h1 className=' text-4xl lg:text-3xl font-bold text-gradient'>{heading}</h1>
        <h1 className='text-slate-900 text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold filter drop-shadow-lg'>{title}</h1>
        <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
        <Link role='button' to='productlist' className='flex items-center '>
          <button className='button-theme bg-slate-900 text-slate-100 py-1.5 shadow-slate-900 md:mb-4'>{btn}</button>
        </Link>
      </div>

      <div className='flex items-center justify-center max-w-xl lg:max-w-none w-full relative'>
        <img src={img} alt="" className={`w-auto object-fill transitions-theme ${isHighlight ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:36 rotate-6 hover:-rotate-12' : 'h-72 lg:h-64 md:h-60 sm:h-48 xsm:44 rotate-[19deg] hover:rotate-12'}`}/>
      </div>
    
    </div>
  )
}

export default Content


