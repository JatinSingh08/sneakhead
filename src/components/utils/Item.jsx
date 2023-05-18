import React from 'react'
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({popular,id, title, text, rating, btn, img, price, color, shadow }) => {
  return (
    <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 ${popular ? "justify-items-start" : "justify-items-center"}`}>
      <div className={`grid items-center ${popular ? "justify-items-start" : "justify-items-end items-start"}`}>
        <h1 className='text-slate-200 font-bold text-xl lg:text-lg md:text-base filter drop-shadow'>{title}</h1>
        <p className='text-slate-200 text-base md:text-sm font-semibold'>{text}</p>

      <div className={`flex  gap-3 m-2 items-start`}>
        <div className='flex items-center bg-slate-200 rounded-md px-2 '>
          <h1>${price}</h1>
        </div>

        <div className='flex items-center text-slate-200 gap-1'>
          {/* star icon */}
          <StarIcon className='w-4 h-4'/>
          <h1>{rating}</h1>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <button className='bg-white/90 button-theme blur-effect p-1 h-8 shadow-sky-200 rounded-m'>
          
          <ShoppingBagIcon className='icon-style text-slate-900'/>
        </button>

        <button className='bg-white/90 button-theme blur-effect px-2 h-8 shadow-sky-200 text-sm text-black font-semibold'>
          {btn}
        </button>
      </div>

      <div className={`flex items-center ${popular ? 'absolute top-5 right-1' : 'justify-center'}`}>
        <img src={img} alt="" 
        className={`transitions-theme hover:-rotate-12 ${popular ? "h-auto w-64 lg:w-56 -rotate-[35deg]" : "h-36 w-64"}`}
        />
      </div>

      </div>
    </div>
  )
}

export default Item
