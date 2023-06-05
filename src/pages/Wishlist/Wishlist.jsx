import React from 'react'
import { useData } from '../../context'
import { SingleProductCard } from '../../components';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../../components/Loaders/Loader';
import { emptyWishlistGif } from '../../assets';

const Wishlist = () => {
  const { state } = useData();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    }
  }, []);

  if(isLoading) return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Loader />
    </div>
  )

  return (
    <div className='min-h-screen flex flex-col mt-[20vh] items-center text-start'>
      {
        state.wishlist.length > 0 ? (
          <div className='text-start'>
      <h1 className='text-xl font-medium'>>> Wishlist Sneakers</h1>
      <div className=' grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 items-center justify-items-center'>
        {
          state?.wishlist?.map((wishlsitItem, i) => (
            <SingleProductCard 
            isWishlist
            shoe={wishlsitItem}
            key={i}
            />
          ))
        }
      </div>
          
          </div>
        ) : (
          <>
            <img src={emptyWishlistGif} alt="" />
            <div className='flex flex-col items-center justify-center mt-2'>
              <h1 className='font-medium text-2xl text-[#7F7F7F] md:text-lg'>There is Nothing to show in your Wishlist.</h1>
              <h1 className='font-medium text-lg text-[#7F7F7F] md:text-base'>Add some cool Sneakers to Your Wishlist.</h1>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Wishlist
