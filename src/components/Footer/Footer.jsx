import React from 'react'

const Footer = ({footerData}) => {
  const { titles, links } = footerData
  return (
    <footer className='bg-theme pt-7 pb-5 bottom-0 left-0 right-0'>
      <div className='nike-container text-slate-200'>
        <div className='grid items-start text-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
          {
            titles.map(({title}, i) => (
              <div className='grid items-start' key={i}>
                <h1 className='text-lg lg:text-base uppercase font-semibold'>{title}</h1>
              </div>
            ))
          }

          {
            links.map((linksArr, i) => (
              <ul key={i} className='grid items-start gap-1  mt-3 md:mt-0'>
                {
                  linksArr.map(({link}, i) => (
                    <li key={i} className='text-sm sm:text-xs'>{link}</li>
                  ))
                }
              </ul>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
