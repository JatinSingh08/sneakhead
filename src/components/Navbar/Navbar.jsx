import React, { useEffect, useState } from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import sneaheadlogo from "../../assets/sneakheadlogo.svg";
import { useAuth, useData } from "../../context";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { token } = useAuth();
  const { state, applyFilters } = useData();
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
          ? ` absolute top-7 left-0 right-0 opacity-100 z-50`
          : `fixed top-0 left-0 right-0 blur-effect-theme h-[9vh] flex items-center justify-center opacity-100 z-50`
      }
    >
      <nav className="flex items-center justify-between nike-container">
        <Link to="/">
          <img
            src={sneaheadlogo}
            alt=""
            className={`w-auto h-14 text-red-600`}
          />
        </Link>

        <form class="flex items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  outline-none h-8"
              placeholder="Search"
              name="searchValue"
              onChange={(e) => applyFilters(e.target.name, e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            class="flex items-center justify-center p-2.5 ml-2 text-sm font-medium text-white bg-gray-900 button-theme transition-all duration-700 drop-shadow-lg rounded-lg border border-blue-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 h-8"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>

        <ul className="flex items-center justify-center gap-4">
          <li className="grid items-center">
            <Link to="/productlist">
              <button className="button-theme blur-effect bg-slate-800 text-slate-200 drop-shadow-lg">
                Explore
              </button>
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
                {state?.wishlist?.length}
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
                {state?.cart?.length}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
