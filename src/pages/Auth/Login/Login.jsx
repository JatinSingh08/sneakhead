import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context'
import { toastNotification } from '../../../utils/utlis';


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
  
  useEffect(() => {
    
    if(token) {
      toastNotification('success', 'Successfully Logged In');
      navigate(location?.state?.from.pathname || '/')
    }
  } ,[token])

  return (
    <form className='h-full mb-20 md:mx-1' onSubmit={submitHandler}>
      <div className="w-96  m-auto mt-24 md:mt-44 md:mx-auto h-auto p-4 border rounded-md drop-shadow-sm flex flex-col gap-3">
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
        <button 
        className="button-theme bg-slate-900 shadow-md text-slate-200"
        type='submit'
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
