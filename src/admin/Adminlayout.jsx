import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
// Import a suitable icon for the menu button (e.g., Heroicons menu/close)
// For this example, we'll assume you have a simple icon component or use a library like 'react-icons'
// If not using a library, you'd paste the SVG path directly or use simple characters.

// Example Heroicon SVG paths (You'd ideally use a library or component)
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  // State to manage the visibility of the sidebar on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Add a console log to confirm AdminLayout is rendering
  useEffect(() => {
    console.log('AdminLayout component mounted.');
  }, []);

  const handleLogout = () => {
    navigate('/admin'); // Redirect to login page
    // In a real app, you'd also clear auth tokens here
    setIsSidebarOpen(false); // Close sidebar on mobile after action
  };
  
  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  // Function to close sidebar (useful for navigation links)
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Mobile Menu Button - Visible only on small screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar menu"
          className="p-2 text-gray-600 bg-white rounded-full shadow-lg border border-gray-300 hover:text-indigo-500 transition duration-200"
        >
          {isSidebarOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Overlay - Visible only when sidebar is open on small screens */}
      {isSidebarOpen && (
        <div 
          onClick={closeSidebar} 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          aria-hidden="true"
        ></div>
      )}

      {/* Side Panel - Conditional rendering/styling for mobile */}
      <div 
        // Base classes: fixed on mobile, flex on desktop
        // Mobile visibility: hidden by default, visible when isSidebarOpen is true.
        // Desktop visibility: always visible, full height
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-300 text-gray-600 flex flex-col justify-between p-6 shadow-lg border-r-2 border-gray-200 transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0 md:flex md:w-64 md:rounded-r-lg
        `}
      >
        <div>
          <div className="mb-6 flex justify-center">
            <Link to="/" aria-label="Go to Home Page" className="block w-[80px] md:w-[100px] h-auto" onClick={closeSidebar}>
              <img src={logo} alt="Studio Dance Core Logo" className="max-w-full h-auto" />
            </Link>
          </div>
          <h2 className="text-2xl font-bold mb-8 text-center text-indigo-500">SDC Admin Panel</h2>
          <nav>
            <ul>
              {/* Note: It's best practice to use Link from 'react-router-dom' for internal navigation 
                  instead of <a> tags with full hrefs to leverage client-side routing. */}
              <li className="mb-4">
                <Link
                  to="/admin/dashboard"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                  onClick={closeSidebar}
                >
                  Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/admin/add-classes"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                  onClick={closeSidebar}
                >
                  Manage Classes
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/admin/add-news"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                  onClick={closeSidebar}
                >
                  Manage News
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/admin/add-products"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                  onClick={closeSidebar}
                >
                  Manage Products
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/admin/add-merch"
                  className="block py-2 px-4 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out"
                  onClick={closeSidebar}
                >
                  Manage Merch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Logout Button */}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area - Shifted to account for sidebar */}
      {/* We need to ensure content doesn't sit under the fixed mobile sidebar */}
      <div className="flex-1 p-8 overflow-auto pt-20 md:pt-8"> 
        {/* The pt-20 adds top padding on mobile to clear the fixed menu button */}
        {children} {/* This is where the specific page content will be rendered */}
      </div>
    </div>
  );
};