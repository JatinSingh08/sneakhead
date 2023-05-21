import React from 'react'
import { Filters, List } from './../../components'
import { useData } from '../../context'

const ProductList = () => {
  const { state } = useData();
  return (
    <div className='flex mt-[9vh]'>
        <Filters />
        <List 
        shoes={state.products}
        />
    </div>
  )
}

export default ProductList  

