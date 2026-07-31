import { House, Clock, ChartLine } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const links =(
    <>
      <li><NavLink to="/" className={({isActive})=> `flex items-center gap-2 font-semibold ${isActive ? 'text-white bg-[#244D3F]':'text-base-content'}`}><House />Home</NavLink></li>
      <li><NavLink to="/timeline" className={({isActive})=> `flex items-center gap-2 font-semibold ${isActive ? 'text-white bg-[#244D3F]':'text-base-content'}`}><Clock></Clock> TimeLine</NavLink></li>
      <li><NavLink to="/stats" className={({isActive})=> `flex items-center gap-2 font-semibold ${isActive ? 'text-white bg-[#244D3F]':'text-base-content'}`}><ChartLine/> States</NavLink></li>
    </>
  )

    return (
        <div className='bg-base-100 shadow-sm'>
            
           <div className="navbar  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <NavLink to="/" className="text-xl font-bold"><span>Keen</span><span className='text-[#244D3F]'>Keeper</span></NavLink>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
      
    </ul>
  </div>
  
</div>

            
        </div>
    );
};

export default Navbar;