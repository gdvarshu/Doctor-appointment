import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />

      {/* Navigation Menu */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li>
          <NavLink to="/" className="py-1">Home</NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className="py-1">All Doctors</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="py-1">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="py-1">Contact</NavLink>
        </li>
      </ul>

      {/* User Profile or Login */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

            {/* Dropdown Menu */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate('/my-appointment')} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">
            Create account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="Menu" />
      </div>

      {/* Mobile Menu */}
      <div className={`${showMenu ? 'fixed w-full h-full bg-white' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden transition-all`}>
        <div className="p-6 flex justify-between items-center">
          <img src={assets.logo} alt="Logo" className="w-32" />
          <img onClick={() => setShowMenu(false)} className="w-6 cursor-pointer" src={assets.cross_icon} alt="Close" />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-10 text-lg">
          <li><NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink></li>
          <li><NavLink to="/doctors" onClick={() => setShowMenu(false)}>All Doctors</NavLink></li>
          <li><NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
