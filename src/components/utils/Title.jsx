import React from 'react'

const Title = ({title}) => {
  return (
    <>
      <div className='grid justify-items-start'>
        <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:1xl text-slate-900 font-bold filter drop-shadow-lg'>{title}</h1>
      </div>
    </>
  )
}

export default Title