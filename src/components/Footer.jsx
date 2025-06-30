import React from 'react';

const Footer = () => (
  <footer className="bg-stone-950 text-white p-6 md:p-8 shadow-inner"> {/* Adjusted padding for mobile */}
    {/* Font Awesome CDN for social icons - Best practice is to import Font Awesome via a package manager like npm/yarn */}
    {/* For this example, we'll keep the CDN link, but note it can be moved to public/index.html or handled differently in a larger React app */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlroXzVz3qF6z1B6X02O1+6RzP/6aKzFjF+Tq7L+hR6mHhB7/y05P+I8fQ9/QyM5V5Q7fQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <div className="container mx-auto text-center">
      <p className="mb-3 text-sm md:text-base">© {new Date().getFullYear()} Dance Studio Core. All rights reserved.</p> {/* Adjusted text size for mobile */}
      <div className="flex justify-center space-x-4 md:space-x-6 text-xl md:text-2xl"> {/* Adjusted icon size and spacing for mobile */}
        {/* Facebook Icon */}
        <a href="https://www.facebook.com/share/1Gb77cwMaG" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/jayaruwan.official?igsh=YmRsaHN6NWs0cTlq" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition duration-300" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        {/* TikTok Icon */}
        <a href="https://www.tiktok.com/@_jayaruwan_" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-black transition duration-300" aria-label="TikTok">
          <i className="fab fa-tiktok"></i>
        </a>
        {/* YouTube Icon */}
        <a href="https://www.youtube.com/@Jayaruwan_Official" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition duration-300" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
    <div className="container mx-auto text-center mt-4"> {/* Added top margin for spacing */}
      <div className="border-t border-gray-700 pt-4"> {/* Replaced <br> with a proper div for the line */}
        <p className="text-sm md:text-base">Developed By <a href="#" className="underline hover:text-[#FFDBBB] transition-colors duration-300">Elements</a></p> {/* Adjusted text size and added hover for link */}
      </div>
    </div>
  </footer>
);

export default Footer;