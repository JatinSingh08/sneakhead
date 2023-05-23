import React from 'react'
import { useData } from '../../context'
import { SingleProductCard } from '../../components';

const Wishlist = () => {
  const { state } = useData();
  return (
    <div className='min-h-screen flex flex-col mt-[20vh] items-center'>
      <h1>Wishlist Items💖</h1>
      <div className=' grid grid-cols-4 items-center justify-items-center'>
        {
          state?.wishlist?.map((wishlsitItem, i) => (
            <SingleProductCard 
            shoe={wishlsitItem}
            key={i}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Wishlist
