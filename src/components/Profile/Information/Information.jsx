import React from 'react'
import { useAuth, useData } from '../../../context'

const Information = () => {
  const { logoutUser, user } = useAuth();
  const { clearCartContext, clearWishlistContext } = useData();
  console.log(user);
  return (
    <div >
      <h1><span className=' text-blue-500 mt-4'>Username: </span> {user?.firstName + user?.lastName}</h1>
      <h1><span className=' text-blue-500'>Email: </span> {user?.email}</h1>
      <button 
        onClick={() =>{
         logoutUser();
         clearCartContext();
         clearWishlistContext();
        }}
        className='button-theme blur-effect bg-slate-800 mt-3 text-slate-200 drop-shadow-lg'>Log out</button>
    </div>
  )
}

export default Information
