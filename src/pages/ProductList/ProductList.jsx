import React from 'react'
import { Filters, List } from './../../components'
import { useData } from '../../context'
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../../components/Loaders/Loader';

const ProductList = () => {
  const { state, filteredProducts } = useData();
  
  return (
    <div className='flex mt-[9vh]'>
        <Filters />
        {
          // isLoading ? (
          //   <div className='max-w-full m-auto'>

          //   <Loader />
          //   </div>
          // ) : (

            <List 
            shoes={filteredProducts}
            />
          // )
        }
    </div>
  )
}

export default ProductList  

