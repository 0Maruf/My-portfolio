import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const Navber = () => {
const navLink = <>
<li><a href="">Home</a></li>
<li><a href="">About</a></li>
<li><a href="">Education</a></li>
<li><a href="">Projects</a></li>
<li><a href="">Contact</a></li>

</>
  
  return (
    <div className="navbar bg-black  text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {navLink}
          </ul>
        </div>
       <h1 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
        <FaLaptopCode className="text-3xl text-cyan-400" />
        Maruf <span className="hidden md:inline text-white">Dev</span>
      </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLink}
        </ul>
      </div>
      <div className="navbar-end">
       <a
          href="https://drive.google.com/file/d/1ZjDbEDm3zOXJi-B8tb3yv504PwfNao5w/view"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navber;