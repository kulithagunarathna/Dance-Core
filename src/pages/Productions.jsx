import React, { forwardRef } from 'react';

import productionsBannerVideo from '../assets/videos/manoloka.mp4';

// Import your local images
import manoloka from '../assets/images/manoloka_theBeginning.webp';
import thePodcast from '../assets/images/thepodcast.webp';
import soon2 from '../assets/images/SOON.webp';
import soon3 from '../assets/images/SOON.webp';
import soon4 from '../assets/images/SOON.webp';
import soon5 from '../assets/images/SOON.webp';


// Reusable component for a video card
const VideoCard = ({ imageUrl, title, videoUrl }) => (
  // MODIFIED: Replaced 'h-70' with 'aspect-video' for robust responsive height.
  // Added responsive padding and font sizes.
  <a
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full aspect-video overflow-hidden group flex items-end p-2 sm:p-3
               hover:shadow-xl transition-shadow duration-300 rounded-xl"
    aria-label={`View ${title || 'video'}`}
  >
    <img
      src={imageUrl}
      alt={title || 'Coming Soon'}
      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      {/* Responsive font size and padding */}
      <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold line-clamp-2 px-2 pb-1 sm:px-3 sm:pb-2">
        {title || 'Coming Soon'}
      </h3>
    </div>
  </a>
);

const Productions = forwardRef((props, ref) => {
  const videos = [
    { id: 'manoloka-01', imageUrl: manoloka, title: 'Manoloka Episode 01 - THE BEGINNING', videoUrl: 'https://youtu.be/4B_bPZ_9v2o'},
    { id: 'thePodcast', imageUrl: thePodcast, title: 'Coming Soon', videoUrl: '#'},
    { id: 'soon-02', imageUrl: soon2, title: 'Coming Soon: Production 2', videoUrl: '#'},
    { id: 'soon-03', imageUrl: soon3, title: 'Coming Soon: Production 3', videoUrl: '#'},
    { id: 'soon-04', imageUrl: soon4, title: 'Coming Soon: Production 4', videoUrl: '#'},
    { id: 'soon-05', imageUrl: soon5, title: 'Coming Soon: Production 5', videoUrl: '#'},
  ];

  return (
    // MODIFIED: Responsive padding (p-4 sm:p-6 md:p-8) and height (min-h-[600px] md:h-[913px])
    // Added flex-col to enable vertical stacking on smaller screens
    <section ref={ref} className="p-4 sm:p-6 md:p-8 w-full bg-black text-white min-h-[600px] md:h-[913px] flex flex-col">
      {/* Retained original custom scrollbar styles (visible on hover) */}
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
      
      {/* MODIFIED: Responsive font size and margin for title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-left uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#FFDBBB' }}>
        Productions
      </h2>
      {/* MODIFIED: Responsive flex direction (flex-col md:flex-row) and gap. */}
      {/* Changed fixed height to flex-grow to allow content to dictate height. */}
      {/* Retained overflow-x-hidden for safeguarding against horizontal overflow. */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-grow overflow-x-hidden">
        {/* Left side: Banner Video */}
          <div className="w-full md:w-1/2 flex-shrink-0 aspect-[4/3] md:h-full">
            <a href="/manoloka" className="block h-full">
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
        {/* MODIFIED: Responsive width, height, and padding-right. */}
        {/* Retained overflow-y-auto and custom-scrollbar for scrollability and visible scrollbar on hover. */}
        <div className="w-full md:w-1/2 flex-grow overflow-y-auto pr-2 sm:pr-4 h-[400px] md:h-full custom-scrollbar rounded-xl">
          {/* MODIFIED: Responsive grid columns to prevent horizontal overflow and optimize layout. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                imageUrl={video.imageUrl}
                title={video.title}
                videoUrl={video.videoUrl}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Custom style to make video cards shorter on small screens */}
      <style>{`
        @media (max-width: 639px) {
          .aspect-video {
            aspect-ratio: 16/6 !important;
          }
        }
      `}</style>
    </section>
  );
});

export default Productions;