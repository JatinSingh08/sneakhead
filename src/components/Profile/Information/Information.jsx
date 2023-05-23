import React from 'react'
import { useAuth } from '../../../context'

const Information = () => {
  const { logoutUser } = useAuth();
  return (
    <div>
      <h1>Name: Jatin Singh</h1>
      <h1>Email: singhjatin0182@gmail.com</h1>
      <button 
        onClick={() => logoutUser()}
        className='button-theme blur-effect bg-slate-800 text-slate-200 drop-shadow-lg'>Log out</button>
    </div>
  )
}

export default Information
