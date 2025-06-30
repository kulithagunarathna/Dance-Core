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
    <div className="flex flex-col items-center justify-center bg-black w-full">
      {/* The Navigation Bar, positioned absolutely on top of the video and text */}
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage={setActivePage} />
      </div>

      {/* Hero Section - now contains the NavBar as an overlay */}
      <section
        className="relative w-full h-[calc(100vw*3/4)] md:h-[80vh] lg:h-[60vh] bg-gray-800 flex justify-center shadow-lg mt-0 pt-0"
      >
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
      </section>

      <Productions ref={productionsRef} />
      <Merch/>
      <Classes/>

      {/* About Us Section */}
      <section className="p-8 w-full bg-white flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: 'black' }}>
          About Us
        </h2>

        <div className="flex items-center justify-center p-4">
          <p className="text-base md:text-lg text-gray-600 text-center flex-grow text-justify max-w-2xl">
            We are creating meaningful and enjoyable products for our audience. We are also training our younger generation through our Studio Dance Core classes.
          </p>
        </div>
        <br />
        <br />

        <button
          className="px-8 py-3 md:px-10 md:py-4 bg-black text-white text-base md:text-lg font-semibold rounded-full shadow-lg flex items-center justify-center
                      hover:bg-[#FFDBBB] transform hover:scale-105 transition-all duration-300 border border-white"
          onClick={navigateToAboutUsPage}
        >
          See More
        </button>
      </section>
    </div>
  );
};

export default HomePage;