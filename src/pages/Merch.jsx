import React, { useRef, useEffect } from 'react';

// Placeholder images - In a real application, you would use actual image paths
import merchTshirt from "../assets/images/tshirt.webp";
import merchScarf from "../assets/images/soon.jpg";
// Note: Keeping placeholder.co URLs commented out as they were previously,
// assuming you'll replace them with local assets or robust CDN links if needed.
// const merchHat = "https://placehold.co/200x200/F0F0F0/333333?text=Hat";
// const merchHoodie = "https://placehold.co/200x200/F0F0F0/333333?text=Hoodie";
// const merchBottle = "https://placehold.co/200x200/F0F0F0/333333?text=Bottle";

// Reusable component for a Merch Card
const MerchCard = ({ item, url }) => (
  // Adjusted width (w-48 sm:w-56 md:w-64) and height (h-56 sm:h-64 md:h-72) for responsiveness
  // Adjusted horizontal margin (mx-2 sm:mx-3 md:mx-4) for spacing
  <div className="flex-shrink-0 w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex flex-col justify-between items-center text-center mx-2 sm:mx-3 md:mx-4 transition-transform duration-300 ease-in-out hover:scale-105">
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.name}`}>
      <img
        src={item.image}
        alt={item.name}
        className="max-h-[70%] sm:max-h-[80%] w-auto object-contain mb-2 rounded" // Adjusted max-height for images
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/F0F0F0/333333?text=Image+Error"; }}
      />
      <p className="text-black text-base sm:text-lg font-semibold">{item.name}</p> {/* Responsive font size */}
      <p className="text-gray-600 text-xs sm:text-sm">Rs.{item.price}</p> {/* Responsive font size */}
    </a>
  </div>
);

const Merch = () => {
  // Create a ref to attach to the scrollable container
  const merchContainerRef = useRef(null);

  const merchItems = [
    { id: 'tshirt', name: 'Studio T-Shirt', price: '2699.00', image: merchTshirt, url:'https://docs.google.com/forms/d/e/1FAIpQLSf_KSj1Mwu-8qHwq0vvSz-HC5wDiNJcqh-nUGEea-FqHwZbBQ/viewform?usp=dialog' },
    { id: 'scarf', name: 'Signature Scarf', price: 'COMING SOON', image: merchScarf, url: '#' }, // Added a placeholder URL and price text
    // Uncomment and add actual images/urls when ready
    // { id: 'hat', name: 'Dance Core Hat', price: '24.99', image: merchHat },
    // { id: 'hoodie', name: 'Performance Hoodie', price: '45.00', image: merchHoodie },
    // { id: 'bottle', name: 'Hydration Bottle', price: '12.00', image: merchBottle },
  ];

  useEffect(() => {
    const merchContainer = merchContainerRef.current;

    if (merchContainer) {
      const handleWheelScroll = (event) => {
        // Prevent default vertical scrolling
        event.preventDefault();
        // Adjust scrollLeft based on the mouse wheel deltaY
        merchContainer.scrollLeft += event.deltaY * 2.0;
      };

      // Add the event listener to the container
      merchContainer.addEventListener('wheel', handleWheelScroll);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        merchContainer.removeEventListener('wheel', handleWheelScroll);
      };
    }
  }, []);

  return (
    <section className="w-full p-4 sm:p-6 md:p-8 bg-[#54463a] text-white min-h-[400px] md:h-[500px] flex flex-col justify-center"> {/* Adjusted padding and height */}
      {/* Custom styles for scrollbar hiding and smooth scrolling with hover effect */}
      <style>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
        .merch-scroll-container::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        .merch-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .merch-scroll-container::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 2px;
          transition: background-color 0.3s ease-in-out;
        }

        /* Show scrollbar thumb on hover of the container */
        .merch-scroll-container:hover::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
        }

        /* Firefox */
        .merch-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          scroll-behavior: smooth;
        }

        /* Show scrollbar thumb on hover for Firefox */
        .merch-scroll-container:hover {
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
        }
      `}</style>

      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 sm:mb-8 text-center sm:text-left uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#FFDBBB' }}> {/* Responsive font size and text alignment */}
        Merch
      </h2>
      <div
        ref={merchContainerRef}
        className="flex overflow-x-auto pb-4 sm:pb-6 merch-scroll-container flex-grow items-center justify-start sm:justify-center" // Centered items for fewer cards
      >
        {/* Fallback for url */}
        {merchItems.length > 0 ? (
          merchItems.map((item) => (
            <MerchCard key={item.id} item={item} url={item.url || '#'} />
          ))
        ) : (
          <p className="text-lg text-gray-300 text-center w-full">More awesome merch coming soon!</p>
        )}
      </div>
    </section>
  );
};

export default Merch;