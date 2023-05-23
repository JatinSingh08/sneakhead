import React from 'react'

const Filters = () => {
  return (
    <div className='sticky p-10 h-[100vh] w-96 left-0 top-0 gap-6 flex flex-col border-r-2 overflow-y-scroll scrollbar-theme'>
     
      {/* Price slider */}
      <div className='flex flex-col items-start '>
        <h1 className='font-semibold text-[20px] w-full'>Price Range: Rs.10,000</h1>
          <div className='flex justify-between w-full'>
            <span>1000</span>
            <span>5000</span>
            <span>10000</span>
          </div>
          <div className='w-full'>
            <input type="range"
            min={1000}
            max={10000}
            step={1000}
            className='w-full'
            />
        </div>
      </div>

      {/* Brands  */}
      <div className='grid items-start justify-items-start'>
        <h1 className='underline underline-offset-4 text-2xl text-slate-900 font-bold filter drop-shadow-lg'>Brands</h1>
        <div className='grid gap-1 justify-items-start mt-3'>
          <label className='flex gap-2'>
            <input type="checkbox" 
            className=''
            
            />
            Puma
          </label>

          <label className='flex gap-2'>
            <input type="checkbox" />
            Adidas
          </label>

          <label className='flex gap-2'>
            <input type="checkbox" />
            Nike
          </label>

          <label className='flex gap-2'>
            <input type="checkbox" />
            Vans
          </label>

          <label className='flex gap-2'>
            <input type="checkbox" />
            Converse
          </label>

        </div>
      </div>

    {/* Rating */}
    <div className='grid items-start justify-items-start'>
        <h1 className='underline underline-offset-4 text-2xl text-slate-900 font-bold filter drop-shadow-lg'>Rating</h1>
        <div className='grid gap-1 justify-items-start mt-3'>
          <label className='flex gap-2'>
            <input type="radio" 
            className=''
            name='rating'
            />
            4 Star and above
          </label>

          <label className='flex gap-2'>
            <input type="radio" 
            name='rating'
            />
            3 Star and above
          </label>

          <label className='flex gap-2'>
            <input type="radio" 
            name='rating'
            />
            2 Star and above
          </label>

          <label className='flex gap-2'>
            <input type="radio" 
            name='rating'
            />
            1 Star and above
          </label>

        </div>
      </div>


      {/* Category */}
      <div className='grid items-start justify-items-start'>
        <h1 className='underline underline-offset-4 text-2xl text-slate-900 font-bold filter drop-shadow-lg'>Category</h1>
        <div className='grid gap-1 justify-items-start mt-3'>
          <label className='flex gap-2'>
            <input type="checkbox" 
            className=''
            
            />
            Men
          </label>

          <label className='flex gap-2'>
            <input type="checkbox" />
            Women
          </label>

          <label className='flex gap-2'>
            <input type="checkbox" />
            Sports
          </label>

          <label className='flex gap-2'>
            <input type="checkbox" />
            Trending
          </label>

        </div>
      </div>
      

    {/* Sort By */}
    <div className='grid items-start justify-items-start'>
        <h1 className='underline underline-offset-4 text-2xl text-slate-900 font-bold filter drop-shadow-lg'>Sort By</h1>
        <div className='grid gap-1 justify-items-start mt-3'>
          <label className='flex gap-2'>
            <input type="radio" 
            className=''
            name='sort'
            />
            Price High to Low
          </label>

          <label className='flex gap-2'>
            <input type="radio"
            name='sort'
            />
            Price Low to High
          </label>

        </div>
      </div>

  </div>
  )
}

export default Filters
