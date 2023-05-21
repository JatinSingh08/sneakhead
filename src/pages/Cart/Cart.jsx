import React from 'react'
import { BillingBox, SingleProductCard } from '../../components'
import product8 from "../../assets/product8.png";
import product11 from "../../assets/product11.png";


const cart = [ 
  {
    id: "0M0x11",
    title: "Nike Air Black Max",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product11,
    price: "150",
    color: "from-slate-900 to-black",
    shadow: "shadow-lg shadow-black",
  },
  {
    id: "0M0x12",
    title: "Nike Zoom Max",
    text: "MEN Running Shoes",
    rating: "5+",
    btn: "Buy Now",
    img: product8,
    price: "150",
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
]
const Cart = () => {
  return (
    <div className='h-[100vh]'>
      <h1 className='text-5xl font-bold'>Cart🛒</h1>
      <div className='grid grid-cols-2 items-start justify-items-center'>
        <div>
          {
            cart.map((cartItem, i) => (
              <SingleProductCard 
              shoe={cartItem}
              key={i}
              />
            ))
          }
        </div>
        <BillingBox />
      </div>
    </div>
  )
}

export default Cart
