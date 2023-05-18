import React from 'react'
import { Filters, List } from './../../components'
import { toprateslaes } from '../../Data/data'

const ProductList = () => {
  return (
    <div className='flex mt-[9vh]'>
        <Filters />
        <List 
        shoes={toprateslaes}
        />
    </div>
  )
}

export default ProductList  

