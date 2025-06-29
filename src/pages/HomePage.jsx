import React, { useRef } from 'react';
import heroVideo from '../assets/videos/home.mp4'; // Adjust the path as needed
import logo from '../assets/images/logo.webp'; // Path to your fallback image
import Productions from './Productions'; // Import the Productions component
import Merch from './Merch'; // Import the Merch component
import Classes from './Classes'; // Import the new Classes component
import AboutUsPage from './AboutUsPage'; // Import the AboutUsPage component
import NavBar from '../components/NavBar'; // Import the NavBar component
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ setActivePage }) => {
  const productionsRef = useRef(null);
  const navigate = useNavigate();

  const scrollToProductions = () => {
    if (productionsRef.current) {
      productionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToAboutUsPage = () => {
    navigate('/about-us'); // Navigate to the /about-us route
  };
  

  return (
    <div className="w-full flex flex-col items-center justify-center bg-stone-800">

      {/* Hero Section - now contains the NavBar as an overlay */}
      <section
        className="relative w-full h-[100vh] bg-gray-800 flex justify-center overflow-hidden shadow-lg"
      >
        {/* The Navigation Bar, positioned absolutely on top of the video and text */}
        <div className="absolute top-0 left-0 right-0 z-40">
          <NavBar setActivePage={setActivePage} />
        </div>

        <video
          className="absolute w-full h-full object-cover opacity-100"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          title="Studio Dance Core"
          poster={logo} // Fallback image for browsers that don't support video
        >
          Your browser does not support the video tag.
        </video>

        {/* Hero Button Overlay - explicitly using flex for internal alignment and positioning */}
        {/* This div is now absolute to the bottom, takes full width, and uses flex to center the button */}
        <div className="absolute bottom-0 left-0 right-0 z-30 text-white text-center p-4 pb-20 flex justify-center items-end">
          <button
           className="px-10 py-4 bg-transparent text-white text-xl font-semibold rounded-full shadow-lg
                       hover:bg-[#FFDBBB] transform hover:scale-105 transition-all duration-300 border border-white"
                       onClick={scrollToProductions}
          >
            <ArrowDown className="items-center"/>
          </button>
        </div>
      </section>

      <Productions ref={productionsRef} />
      <Merch/>
      <Classes/>

      <section className="p-8 w-full bg-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: 'black' }}>
          About Us
        </h2>

        {/* Flex container for logo and paragraph */}
        <div className="flex items-center justify-center p-4">
          {/* Paragraph on the right */}
          <p className="text-lg text-gray-600 text-center flex-grow text-justify">
            We are creating meaningful and enjoyable products to our audience. We are also training our younger generation through our Studio Dance Core classes.
          </p>
        </div>
        <br />
        <br />

        <button
          className="px-10 py-4 bg-black text-white text-lg font-semibold rounded-full shadow-lg flex items-center justify-center
                  hover:bg-[#FFDBBB] transform hover:scale-105 transition-all duration-300 border border-white"
          onClick={navigateToAboutUsPage} // Call the navigation function
        >
          See More
        </button>
      </section>
    </div>
  );
};

export default HomePage;
