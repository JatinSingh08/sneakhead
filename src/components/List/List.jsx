import React from 'react'
import SingleProduct from '../SingleProductCard/SingleProductCard'

const List = ({shoes}) => {
  return (
      <div className='grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 items-center justify-items-center p-10 w-[100vw]' >
        {
          shoes.map((shoeData, i) => (
            i >= 15 &&
            <SingleProduct 
            shoe={shoeData}
            key={i}
            />
          ))
        }
      </div>
  )
}

export default List
