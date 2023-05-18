import React from 'react'
import SingleProductCard from '../SingleProductCard/SingleProductCard';

const List = ({shoes}) => {
  const { items } = shoes;
  return (
      <div className='grid grid-cols-3 gap-3 lg:grid-cols-2 md:grid-cols-1 items-center justify-items-center p-10 w-[100vw]' >
        {
          items.map((shoeData, i) => (
            <SingleProductCard 
            shoe={shoeData}
            key={i}
            />
          ))
        }
      </div>
  )
}

export default List
