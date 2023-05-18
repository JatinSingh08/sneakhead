import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleNavbar = () => {
    if(window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavbar);

    return () => window.removeEventListener('scroll', handleNavbar);
  },[])

  return (
    <header 
    className={!scroll ? ` absolute top-7 left-0 right-0 opacity-100 z-50` : `fixed top-0 left-0 right-0 blur-effect-theme h-[9vh] flex items-center justify-center opacity-100 z-50`}
    >
      <nav className='flex items-center justify-between nike-container'>
        <Link to='/'>
          <div className={`text-xl text-red-600 ${scroll && "filter brightness-0"}`}>
            SneakHead
          </div>
        </Link>
        
        <ul className='flex items-center justify-center gap-4'>
          <li className='grid items-center'>
            <MagnifyingGlassIcon className={`icon-style ${scroll && "text-slate-900 transition-all duration-300"} `}/>
          </li>
          <li className='grid items-center'>
            <Link to='/wishlist'>
              <HeartIcon className={`icon-style ${scroll && "text-slate-900 transition-all duration-300"} `}>
                <NavLink to='/wishlist' />
              </HeartIcon> 
            </Link>
          </li>
          <li className='grid items-center relative'>
            <Link to='/cart'>
              <button className='relative'>
                <ShoppingBagIcon className={`icon-style ${scroll && "text-slate-900 transition-all duration-300"} `}/>
              </button>
            </Link>
            <div
            className={`absolute top-4 right-0 bg-slate-300 text-slate-900 flex items-center justify-center rounded-full shadow shadow-slate-100 font-medium cursor-pointer w-4 h-4`}
            >0</div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
