import React, { useEffect, useState } from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import sneaheadlogo from "../../assets/sneakheadlogo.svg";
import { useAuth, useData } from "../../context";
import { MdOutlineExplore } from 'react-icons/md';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { token, user } = useAuth();
  const { state, applyFilters } = useData();
  const navigate = useNavigate();
  const handleNavbar = () => {
    if (window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);

    return () => window.removeEventListener("scroll", handleNavbar);
  }, []);

  return (
    <header
      className={
        !scroll
          ? `absolute top-7 left-0 right-0 opacity-100 z-50`
          : `fixed top-0 left-0 right-0 blur-effect-theme h-[10vh] md:py-5 flex flex-col items-center justify-center opacity-100 z-50 `
      }
    >
      <nav className={`flex items-center justify-between nike-container ${scroll && 'md:mt-8 mb-2'}`}>
          <Link to="/">
            <img
              src={sneaheadlogo}
              alt=""
              className={`w-auto h-14 md:h-11 text-red-600`}
            />
          </Link>
        <div className={`block md:hidden`} >
          <form class={`flex items-center `}>
          <div className={`relative`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-1 pl-12 pr-4 text-gray-500 border rounded-3xl  bg-[#fee8de] focus:bg-[#ffece2] focus:outline-none "
                    name="searchValue"
                    value={state.filters.searchValue}
                    onChange={(e) => {
                      applyFilters(e.target.name, e.target.value);
                      e.target.value.trim().length > 0 && navigate("/productlist");
                    }}
             />
            </div>
          </form>
        </div>

        {/* Responsive Searchbar */}
        

          <ul className="flex items-center justify-center gap-4 md:gap-2">
            <li className="grid items-center">
              <Link to="/productlist">
                {/* <button className="button-theme blur-effect bg-slate-800 text-slate-200 drop-shadow-lg">
                  Explore
                </button> */}
                <MdOutlineExplore  
                className={`icon-style w-6 h-6 text-slate-900 ${
                    scroll && "text-slate-900 transition-all duration-300"
                  } `}/>
              </Link>
            </li>
            <li className="">
              <Link to={`${token ? "/profile" : "/login"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`icon-style w-6 h-6 text-slate-900 ${
                    scroll && "text-slate-900 transition-all duration-300"
                  } `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </li>

            <li className="grid items-center relative">
              <Link to="/wishlist">
                <button className="relative">
                  <HeartIcon
                    className={`icon-style w-6 text-slate-900 ${
                      scroll && "text-slate-900 transition-all duration-300"
                    } `}
                  />
                </button>
                <div
                  className={`absolute top-4 right-0 bg-slate-300 text-slate-900 flex items-center justify-center rounded-full shadow shadow-slate-100 font-medium cursor-pointer w-4 h-4`}
                >
                  {!user ? 0 : state?.wishlist?.length}
                </div>
              </Link>
            </li>
            <li className="grid items-center relative">
              <Link to="/cart">
                <button className="relative">
                  <ShoppingBagIcon
                    className={`icon-style text-slate-900 ${
                      scroll && "text-slate-900 transition-all duration-300"
                    } `}
                  />
                </button>

                <div
                  className={`absolute top-4 right-0 bg-slate-300 text-slate-900 flex items-center justify-center rounded-full shadow shadow-slate-100 font-medium cursor-pointer w-4 h-4`}
                >
                  {!user ? 0 : state?.cart?.length }
                </div>
              </Link>
            </li>
          </ul>
      </nav>
      <div className={`hidden md:block `}>
          <form class={`flex items-center justify-center m-auto w-[280px] ${!scroll ? 'md:mt-3' : 'md:mb-0'}`}>
          <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-1 pl-12 pr-4 text-gray-500 border rounded-3xl  bg-[#fee8de] focus:bg-[#ffece2] focus:outline-none "
                    name="searchValue"
                    onChange={(e) => {
                      applyFilters(e.target.name, e.target.value);
                      e.target.value.trim().length > 0 && navigate("/productlist");
                    }}
             />
            </div>
          </form>
        </div>
    </header>
  );
};

export default Navbar;
