import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ({popular, items, title}) => {
  return (
    <div className={`nike-container mt-1 ${popular && 'md:mt-16'} ${popular && 'mt-10'}`}>
      <Title title={title}/>
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${popular ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1" : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"}`}>
        {
          items.map((item, i) => (
            <Item 
            shoe={item}
            key={i}
            popular={popular}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Sales
