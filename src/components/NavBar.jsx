import React from 'react';
import { Home, Shirt, BookOpen, Users, PlayCircle, Search, Newspaper, UsersRound } from 'lucide-react';
import logo from '../assets/images/logo.webp'; // Adjust the path to your logo image

const NavBar = ({ setActivePage }) => {
  return (
    <nav className="w-full h-25 flex items-center justify-between p-4 bg-transparent backdrop-blur-none">
      <div className="flex items-center space-x-2">
        <span className="size-60 flex items-center">
          <img src={logo} alt="logo" />
        </span>
      </div>
      <div className="flex space-x-8">
        <button
          onClick={() => setActivePage('aboutus')}
          className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-2xl font-medium group"
          aria-label="Go to About Us Page"
        >
          <UsersRound className="h-8 w-8 mr-1 group-hover:scale-110 transition-transform" />
          Who We Are?
        </button>
        <button
          onClick={() => setActivePage('productions')}
          className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-2xl font-medium group"
          aria-label="Go to Productions Section"
        >
          <Newspaper className="h-8 w-8 mr-1 group-hover:scale-110 transition-transform" />
          News
        </button>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 rounded-full bg-opacity-20 text-white placeholder-white outline-none focus:ring-2 focus:ring-[#FFDBBB] transition-all duration-200 w-64"
            aria-label="Search"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;