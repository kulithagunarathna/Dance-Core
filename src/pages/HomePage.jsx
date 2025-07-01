import React, { useEffect, useRef, useState } from 'react';
// Make sure you have home.webm in this directory too!
import heroVideoMp4 from '../assets/videos/home.mp4';
import heroVideoWebm from '../assets/videos/home.webm'; // NEW: Import the .webm version
import logo from '../assets/images/logo.webp';
import Productions from './Productions';
import Merch from './Merch';
import Classes from './Classes';
import NavBar from '../components/NavBar';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HomePage = ({ setActivePage }) => {
  const productionsRef = useRef(null);
  const merchRef = useRef(null);
  const classesRef = useRef(null);
  const aboutUsRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const [notFoundMessage, setNotFoundMessage] = useState(null);

  // Effect to scroll to sections based on URL hash or display not found
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const notFoundQuery = params.get('notFound');

    setNotFoundMessage(null); // Clear any previous message first
    let timeoutId;

    if (location.hash === '#merch-section' && merchRef.current) {
      merchRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (location.hash === '#productions-section' && productionsRef.current) {
      productionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (location.hash === '#classes-section' && classesRef.current) {
      classesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (location.hash === '#about-us-section' && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (notFoundQuery) {
      setNotFoundMessage(`"${decodeURIComponent(notFoundQuery)}" not found.`);
      timeoutId = setTimeout(() => {
        setNotFoundMessage(null);
      }, 10000); // 10 seconds
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

  }, [location.hash, location.search]);

  const navigateToAboutUsPage = () => {
    navigate('/about-us');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full">
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage={setActivePage} />
        {notFoundMessage && (
          <div className="w-full bg-red-800 text-white p-4 text-center text-lg md:text-xl font-semibold">
            {notFoundMessage}
          </div>
        )}
      </div>

      <section
        className="relative w-full h-[calc(100vw*3/4)] md:h-[80vh] lg:h-[60vh] bg-gray-800 flex justify-center shadow-lg mt-0 pt-0"
      >
        <video
          className="absolute w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
          title="Studio Dance Core"
          poster={logo} // Poster image for video before it loads
        >
          {/* NEW: Source for WebM first (often smaller file size) */}
          <source src={heroVideoWebm} type="video/webm" />
          {/* Keep MP4 as a fallback for broader compatibility */}
          <source src={heroVideoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <Productions ref={productionsRef} />
      <Merch ref={merchRef} />
      <Classes ref={classesRef} />

      <section ref={aboutUsRef} className="p-8 w-full bg-white flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: 'black' }}>
          About Us
        </h2>

        <div className="flex items-center justify-center p-4">
          <p className="text-base md:text-lg text-gray-600 text-center flex-grow text-justify max-w-2xl">
            We are creating meaningful and enjoyable products for our audience. We are also training our younger generation through our Studio Dance Core classes.
          </p>
        </div>

        <p className="text-base md:text-lg text-gray-600 text-center flex-grow text-justify max-w-2xl">
          <FontAwesomeIcon icon={faEnvelope} />{' '}
          <a
            href="mailto:studiodancecore@gmail.com"
            className="text-blue-500 hover:underline"
            aria-label="Send email to studiodancecore@gmail.com"
          >
            studiodancecore@gmail.com
          </a>
        </p>

        <p className="text-base md:text-lg text-gray-600 text-center flex-grow text-justify max-w-2xl">
          <FontAwesomeIcon icon={faWhatsapp} />{' '}
          <a
            href="https://wa.me/94713161550"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            aria-label="Chat on WhatsApp with 0713161550"
          >
            0713161550
          </a>
        </p>
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