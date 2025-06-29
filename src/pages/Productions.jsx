import React, { forwardRef } from 'react';

import productionsBannerVideo from '../assets/videos/manoloka.mp4'; // Import the banner video
import Manoloka from './Manoloka';

// Import your local images
// IMPORTANT: Ensure these paths are correct and the images exist!
import manoloka from '../assets/images/manoloka_theBeginning.webp';
import soon1 from '../assets/images/SOON.webp';
import soon2 from '../assets/images/SOON.webp';
import soon3 from '../assets/images/SOON.webp';
import soon4 from '../assets/images/SOON.webp';
import soon5 from '../assets/images/SOON.webp';


// Reusable component for a video card
const VideoCard = ({ imageUrl, title, videoUrl }) => (
  // The entire card is now a relative container for its absolute children
  <a
    href={videoUrl} // Use the new videoUrl prop here
    target="_blank" // Consider if you want links to open in a new tab
    rel="noopener noreferrer" // Good practice for target="_blank"
    className="relative w-full h-70 overflow-hidden group flex items-end p-2
               hover:shadow-xl transition-shadow duration-300 rounded-xl"
    aria-label={`View ${title}`}
  >
    {/* Image as the background, covering the entire card */}
    <img
      src={imageUrl}
      alt={title}
      className="absolute inset-0 w-full object-cover transition-transform duration-300 group-hover:scale-110"
    />

    {/* Overlay for better title readability, positioned over the image */}
    {/* This div also handles the gradient and text positioning */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      {/* Title positioned at the bottom of the card, taking full width */}
      <h3 className="text-white text-sm font-semibold line-clamp-2 px-3 pb-2"> {/* Added px and pb for spacing */}
        {title}
      </h3>
    </div>
  </a>
);

const Productions = forwardRef((props, ref) => {
  // Use your imported local image variables here
  const videos = [
    { imageUrl: manoloka, title: 'Manoloka Episode 01 - THE BEGINNING', videoUrl: 'https://youtu.be/4B_bPZ_9v2o'},
    { imageUrl: soon1},
    { imageUrl: soon2},
    { imageUrl: soon3},
    { imageUrl: soon4},
    { imageUrl: soon5},
  ];

  return (
    <section ref={ref} className="p-8 w-full bg-black text-white h-[913px]">
      {/* Custom CSS for scrollbar */}
      {/* Removed the 'jsx' attribute from the style tag to fix the console warning */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px; /* Make it thin */
          background: transparent; /* Initially invisible */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; /* No background for the track */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: transparent; /* Initially invisible thumb */
          border-radius: 20px; /* Rounded corners for the thumb */
          border: 2px solid transparent; /* No border initially */
        }

        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3); /* Slightly visible white/light gray thumb on hover */
          border-color: rgba(255, 255, 255, 0.1); /* Subtle border on hover */
        }
      `}</style>
      
      <h2 className="text-7xl font-extrabold mb-4 text-left uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#FFDBBB' }}>
        Productions
      </h2>
      <div className="flex flex-col md:flex-row gap-8 h-[calc(100%-8rem)]">
        {/* Left side: Banner Video */}
        
        <div className="w-full md:w-1/2 flex-shrink-0 h-full">
          <a href= "/manoloka">
            <div className="bg-orange-200 rounded-xl overflow-hidden h-full flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                src={productionsBannerVideo}
                autoPlay
                loop
                muted
                playsInline
                title="Manoloka"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </a>
        </div>

        {/* Right side: Scrollable Videos with Local Images */}
        <div className="w-full md:w-1/2 flex-grow overflow-y-auto pr-4 h-full custom-scrollbar rounded-xl">
          <div className="grid grid-cols-1 gap-4">
            {videos.map((video) => (
              <VideoCard key={video.title} imageUrl={video.imageUrl} title={video.title} videoUrl={video.videoUrl}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Productions;
