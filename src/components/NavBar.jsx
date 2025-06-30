import React from 'react';
import { Link } from 'react-router-dom';
import { UsersRound, Newspaper, Search } from 'lucide-react'; // Only import what's needed
import logo from '../assets/images/logo.webp'; // Adjust the path to your logo image

const NavBar = ({ setActivePage }) => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black backdrop-blur-none relative"> {/* Added px-8 py-4 for general padding and relative for positioning later if needed */}
      <div className="flex items-center">
        {/* Adjusted logo size - let the image itself determine the width within reasonable bounds */}
        <Link to="/" aria-label="Go to Home Page" className="block w-[100px] h-auto"> {/* Adjusted width to be closer to screenshot */}
          <img src={logo} alt="Studio Dance Core Logo" className="max-w-full h-auto" />
        </Link>
      </div>

      <div className="flex items-center space-x-8"> {/* This div now holds nav links and search */}
        <Link
          to="/about-us"
          className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-lg font-medium group" /* Adjusted text size to lg */
          aria-label="Go to About Us Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }} // Apply similar font and letter spacing
        >
          <UsersRound className="h-6 w-6 mr-1 group-hover:scale-110 transition-transform" /> {/* Adjusted icon size */}
          Who We Are?
        </Link>
        <Link
          to="/news"
          className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-lg font-medium group" /* Adjusted text size to lg */
          aria-label="Go to News Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }} // Apply similar font and letter spacing
        >
          <Newspaper className="h-6 w-6 mr-1 group-hover:scale-110 transition-transform" /> {/* Adjusted icon size */}
          News
        </Link>

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 rounded-full bg-opacity-20 bg-gray-600 text-white placeholder-white outline-none focus:ring-2 focus:ring-[#FFDBBB] transition-all duration-200 w-48" /* Adjusted width and added a subtle background */
            aria-label="Search"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;