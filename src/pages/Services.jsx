import React from 'react';
import servicesImg from '../assets/images/services.webp';
import NavBar from '../components/NavBar';

const Services = () => {
  const containerStyle = {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#000", // Optional: adds a background color if the image is narrow
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const imageStyle = {
    width: "100%",      // Spans the full width of the screen
    height: "auto",     // Maintains the natural aspect ratio (no cropping)
    display: "block"
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='news' />
      </div>

      <div style={containerStyle}>
        {/* Using an <img> tag ensures the browser calculates the full height of your tall image */}
        <img src={servicesImg} alt="Details" style={imageStyle} />

      </div></>
  );
}

export default Services;