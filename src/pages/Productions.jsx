import React, { forwardRef } from 'react';

import productionsBannerVideo from '../assets/videos/manoloka.mp4';
// import Manoloka from './Manoloka'; // This import is not used here, can be removed if not needed elsewhere in this file

// Import your local images
import manoloka from '../assets/images/manoloka_theBeginning.webp';
import thePodcast from '../assets/images/thepodcast.webp';
import soon2 from '../assets/images/SOON.webp';
import soon3 from '../assets/images/SOON.webp';
import soon4 from '../assets/images/SOON.webp';
import soon5 from '../assets/images/SOON.webp';


// Reusable component for a video card
const VideoCard = ({ imageUrl, title, videoUrl }) => (
  <a
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full h-70 overflow-hidden group flex items-end p-2
               hover:shadow-xl transition-shadow duration-300 rounded-xl"
    aria-label={`View ${title || 'video'}`} // Added fallback for aria-label
  >
    <img
      src={imageUrl}
      alt={title || 'Coming Soon'} // Added fallback for alt text
      className="absolute inset-0 w-full object-cover transition-transform duration-300 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      <h3 className="text-white text-sm font-semibold line-clamp-2 px-3 pb-2">
        {title || 'Coming Soon'} {/* Display 'Coming Soon' if title is undefined */}
      </h3>
    </div>
  </a>
);

const Productions = forwardRef((props, ref) => {
  const videos = [
    // Added unique `id` and ensured all properties are present
    { id: 'manoloka-01', imageUrl: manoloka, title: 'Manoloka Episode 01 - THE BEGINNING', videoUrl: 'https://youtu.be/4B_bPZ_9v2o'},
    { id: 'thePodcast', imageUrl: thePodcast, title: 'Coming Soon', videoUrl: '#'}, // Use '#' or a placeholder URL
    { id: 'soon-02', imageUrl: soon2, title: 'Coming Soon: Production 2', videoUrl: '#'},
    { id: 'soon-03', imageUrl: soon3, title: 'Coming Soon: Production 3', videoUrl: '#'},
    { id: 'soon-04', imageUrl: soon4, title: 'Coming Soon: Production 4', videoUrl: '#'},
    { id: 'soon-05', imageUrl: soon5, title: 'Coming Soon: Production 5', videoUrl: '#'},
  ];

  return (
    <section ref={ref} className="p-8 w-full bg-black text-white h-[913px]">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 20px;
          border: 2px solid transparent;
        }

        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
      
      <h2 className="text-7xl font-extrabold mb-4 text-left uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#FFDBBB' }}>
        Productions
      </h2>
      <div className="flex flex-col md:flex-row gap-8 h-[calc(100%-8rem)]">
        {/* Left side: Banner Video */}
        <div className="w-full md:w-1/2 flex-shrink-0 h-full">
          <a href="/manoloka">
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
              // Use video.id as the unique key
              <VideoCard
                key={video.id} // <--- FIXED: Using unique `id` as the key
                imageUrl={video.imageUrl}
                title={video.title}
                videoUrl={video.videoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Productions;