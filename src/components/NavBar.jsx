import React, { useState } from 'react'; // Import useState for managing mobile menu state
import { Link } from 'react-router-dom';
import { UsersRound, Newspaper, Search, Menu, X } from 'lucide-react'; // Import Menu and X icons
import logo from '../assets/images/logo.webp'; // Adjust the path to your logo image

const NavBar = ({ setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 md:px-8 md:py-4 bg-black backdrop-blur-none relative z-50"> {/* Adjusted padding for mobile, added z-50 */}
      <div className="flex items-center">
        {/* Adjusted logo size for mobile and desktop */}
        <Link to="/" aria-label="Go to Home Page" className="block w-[80px] md:w-[100px] h-auto">
          <img src={logo} alt="Studio Dance Core Logo" className="max-w-full h-auto" />
        </Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-7 w-7" /> // 'X' icon when menu is open
          ) : (
            <Menu className="h-7 w-7" /> // Hamburger icon when menu is closed
          )}
        </button>
      </div>

      {/* Desktop navigation links and search (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8"> {/* Reduced space-x for md, kept lg for larger screens */}
        <Link
          to="/about-us"
          className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-base lg:text-lg font-medium group" /* Adjusted text size for md/lg */
          aria-label="Go to About Us Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/about-us'); }} // Keep this if you're managing active state externally
        >
          <UsersRound className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" /> {/* Adjusted icon size */}
          Who We Are?
        </Link>
        <Link
          to="/news"
          className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-base lg:text-lg font-medium group" /* Adjusted text size for md/lg */
          aria-label="Go to News Page"
          style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
          onClick={() => { setActivePage('/news'); }} // Keep this if you're managing active state externally
        >
          <Newspaper className="h-5 w-5 mr-1 group-hover:scale-110 transition-transform" /> {/* Adjusted icon size */}
          News
        </Link>

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 pl-9 rounded-full bg-opacity-20 bg-gray-600 text-white placeholder-white outline-none focus:ring-2 focus:ring-[#FFDBBB] transition-all duration-200 w-36 md:w-48 text-sm" /* Adjusted width and text size for responsiveness */
            aria-label="Search"
          />
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" /> {/* Adjusted icon size and position */}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-6 space-y-6 animate-fade-in-down">
          {/* Mobile Search Bar */}
          <div className="relative flex items-center w-full max-w-xs px-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 pl-10 rounded-full bg-opacity-20 bg-gray-600 text-white placeholder-white outline-none focus:ring-2 focus:ring-[#FFDBBB] transition-all duration-200 w-full text-base"
              aria-label="Search"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on search input focus/click if desired
            />
            <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
          </div>

          <Link
            to="/about-us"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to About Us Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={() => {
              setActivePage('/about-us');
              setIsMobileMenuOpen(false); // Close menu after clicking a link
            }}
          >
            <UsersRound className="h-7 w-7 mr-2" />
            Who We Are?
          </Link>
          <Link
            to="/news"
            className="flex items-center text-white hover:text-[#FFDBBB] transition-colors duration-200 text-xl font-medium"
            aria-label="Go to News Page"
            style={{ fontFamily: "'MetroPhotograph - Demo Version Regular', sans-serif", letterSpacing: '0.05em' }}
            onClick={() => {
              setActivePage('/news');
              setIsMobileMenuOpen(false); // Close menu after clicking a link
            }}
          >
            <Newspaper className="h-7 w-7 mr-2" />
            News
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;