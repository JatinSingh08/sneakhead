import React from 'react'

const SingleProductCard = ({shoe}) => {
  const { id, title, text, img, price } = shoe;
  return (
    <div 
    className='p-4 w-72 m-2 grid gap-2 items-start text-start border transform  cursor-pointer'
    >
      <div className='h-[20vh]'>
        <img src={img} alt="" 
        className='w-full object-contain mb-33 drop-shadow-xl transform transition duration-500 hover:scale-110 hover:drop-shadow-2xl'
        />
      </div>
        <div className='mt-10 grid gap-2'>
          <h1 className='text-xl font-semibold'>{title}</h1>
          <p className='text-[#757575] top-0'>{text}</p>
          <p className='text-[#757575]'>${price}</p>

          <div className='flex gap-4'>
            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>

            <button className='button-theme blur-effect bg-slate-800 text-slate-200 w-full'>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}

export default SingleProductCard
