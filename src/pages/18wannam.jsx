import React from 'react';
import myImage from '../assets/images/18-wannm-details.jpg';

const Wannam = () => {
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
    <div style={containerStyle}>
      {/* Using an <img> tag ensures the browser calculates the full height of your tall image */}
      <img src={myImage} alt="Details" style={imageStyle} />
      
    </div>
  );
}

export default Wannam;