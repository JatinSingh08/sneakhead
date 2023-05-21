import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context'


const Login = () => {
  const { loginUser, token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const guestUserDetails = {
    email: 'jatinsingh@gmail.com',
    password: 'jatinsingh'
  }
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  })

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(userDetails.email, userDetails.password);
  }

  if(token) {
    console.log('logged in ');
  } else {
    console.log('user not logged in')
  }

  console.log(location);
  useEffect(() => {
    
    if(token) {
      navigate(location?.state?.from.pathname || '/')
    }
  } ,[token])

  return (
    <form className='h-full mb-20' onSubmit={submitHandler}>
      <div className="w-96  m-auto mt-24 h-auto p-4 border rounded-md drop-shadow-sm flex flex-col gap-3">
        <p className="font-semibold text-2xl mb-4">Login</p>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            className="w-auto border rounded-md p-2 outline-none"
            type="text"
            value={userDetails.email}
            autoComplete="nope"
            placeholder="Enter Email"
            onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input 
            className="w-auto border rounded-md p-2 outline-none" 
            value={userDetails.password}
            type="password" 
            placeholder="Enter Password" 
            onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
          />
        </div>
        <label className="label">
          <input className='m-auto mt-3 mb-3' type="checkbox" name="label" id="" /> Remember me
        </label>
        <button 
        className="button-theme bg-slate-900 shadow-md text-slate-200"
        
        >Login</button>
        <button 
        className="button-theme bg-slate-200 shadow-md text-slate-900"
        onClick={() => setUserDetails(guestUserDetails)}
        >Login as Guest</button>
        <div className="text-gray-600 m-auto">
          <p className='text-xl mb-0'>
            Don't have an account?
            <Link to="/signup">
              <span className='text-slate-900 underline ml-2'>Signup</span>
            </Link>
          </p>
        </div>
      </div>
    
    </form>
  )
}

export default Login
