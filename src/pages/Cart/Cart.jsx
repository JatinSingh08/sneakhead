import React from 'react'
import { useData } from '../../context'
import CartProduct from './Components/CartProduct';
import { BillingBox } from '../../components';
import { emptyCartGif } from '../../assets';

const Cart = () => {
  const { state } = useData();

  return (
    <div className='min-h-screen flex flex-col'>
      {
        state?.cart?.length > 0 ? (
          <div className='h-full grid grid-cols-2 lg:grid-cols-1 items-start mt-[15vh] justify-items-center'>
          {
            state.cart.length > 0 && (
              <div className=''>
              {
                state?.cart?.map((cartItem, i) => (
                  <CartProduct 
                  shoe={cartItem}
                  key={i}
                  />
                ))
              }
            </div>
            ) 
          }
          <BillingBox />
      </div>
        ) : (
          <>
            <img src={emptyCartGif} alt="" className='w-96 h-96 m-auto text-center'/>
          </>
        )
      }
    </div>
  )
}

export default Cart
