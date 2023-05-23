import React from 'react'
import { useData } from '../../context'
import CartProduct from './Components/CartProduct';
import { BillingBox } from '../../components';
import { emptyCart } from '../../assets';

const Cart = () => {
  const { state } = useData();

  return (
    <div className='min-h-screen flex flex-col'>
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
      {/* <div className=''>
        <img src={emptyCart} alt="" className='w-96 flex items-center justify-center'/>
      </div> */}

    </div>
  )
}

export default Cart
