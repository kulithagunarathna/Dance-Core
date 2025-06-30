import React from "react";
import manoloka1 from "../assets/images/manoloka-description-01.webp";
import manoloka2 from "../assets/images/manoloka-description-02.webp";
import NavBar from "../components/NavBar";
import manoloka from '../assets/images/manoloka_theBeginning.webp';
import thePodcast from '../assets/images/thepodcast.webp';
import soon2 from '../assets/images/SOON.webp';
import soon3 from '../assets/images/SOON.webp';
import soon4 from '../assets/images/SOON.webp';
import soon5 from '../assets/images/SOON.webp';



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



const Manoloka = () => {
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
        <section className="bg-black">
          <div className="sticky top-0 z-50 w-full"> {/* Added this wrapper div */}
            <NavBar setActivePage='manoloka' />
          </div>
          <img src={manoloka1} alt="manoloka1" />
          <img src={manoloka2} alt="manoloka2" />
          <section className="container p-8 w-full bg-black text-white h-[913px] rounded-xl">
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
                    Playlist
                </h2>
                <div className="w-full md:w-auto flex-grow overflow-y-auto pr-4 h-[720px] custom-scrollbar rounded-xl">
                    <div className="grid grid-cols-1 gap-4">
                        {videos.map((video) => (
                        <VideoCard key={video.title} imageUrl={video.imageUrl} title={video.title} videoUrl={video.videoUrl}/>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Manoloka;