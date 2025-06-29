import React, { useRef, useEffect } from 'react';

// Placeholder images - In a real application, you would use actual image paths
// For demonstration, using placehold.co to generate placeholder images.
// Ensure these URLs are robust or replaced with your actual image assets.
import merchTshirt from "../assets/images/tshirt.webp";
const merchScarf = "https://placehold.co/200x200/F0F0F0/333333?text=Scarf";
const merchHat = "https://placehold.co/200x200/F0F0F0/333333?text=Hat";
const merchHoodie = "https://placehold.co/200x200/F0F0F0/333333?text=Hoodie";
const merchBottle = "https://placehold.co/200x200/F0F0F0/333333?text=Bottle";

// Reusable component for a Merch Card
const MerchCard = ({ item, url }) => (
  // Added transition and hover:scale-105 for the hover effect
  <div className="flex-shrink-0 w-64 h-full bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between items-center text-center mx-3 transition-transform duration-300 ease-in-out hover:scale-105"> {/* Added mx-3 for horizontal spacing */}
    <a href={url} target="_blank">
      <img
        src={item.image}
        alt={item.name}
        className="max-h-[80%] w-auto object-contain mb-2 rounded" // Adjust image size within card, added rounded
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/F0F0F0/333333?text=Image+Error"; }} // Fallback for image loading errors
      />
      <p className="text-black text-lg font-semibold">{item.name}</p>
      <p className="text-gray-600 text-sm">Rs.{item.price}</p>
      {/* Optional: Add a "Buy Now" button or link */}
      {/* <button className="mt-2 bg-gray-800 text-white py-1 px-4 rounded-full text-xs hover:bg-gray-700 transition duration-300">
      Buy Now
      </button> */}
    </a>
  </div>
);

const Merch = () => {
  // Create a ref to attach to the scrollable container
  const merchContainerRef = useRef(null);

  const merchItems = [
    { id: 'tshirt', name: 'Studio T-Shirt', price: '2699.00', image: merchTshirt, url:'https://docs.google.com/forms/d/e/1FAIpQLSf_KSj1Mwu-8qHwq0vvSz-HC5wDiNJcqh-nUGEea-FqHwZbBQ/viewform?usp=dialog' },
    { id: 'scarf', name: 'Signature Scarf', price: '2990.00', image: merchScarf },
    //{ id: 'hat', name: 'Dance Core Hat', price: '24.99', image: merchHat },
    //{ id: 'hoodie', name: 'Performance Hoodie', price: '45.00', image: merchHoodie },
    //{ id: 'bottle', name: 'Hydration Bottle', price: '12.00', image: merchBottle },
    //{ id: 'tshirt', name: 'Studio T-Shirt', price: '29.99', image: merchTshirt },
    //{ id: 'scarf', name: 'Signature Scarf', price: '19.50', image: merchScarf },
    //{ id: 'hat', name: 'Dance Core Hat', price: '24.99', image: merchHat },
    //{ id: 'hoodie', name: 'Performance Hoodie', price: '45.00', image: merchHoodie },
    //{ id: 'bottle', name: 'Hydration Bottle', price: '12.00', image: merchBottle },
  ];

  useEffect(() => {
    const merchContainer = merchContainerRef.current;

    if (merchContainer) {
      const handleWheelScroll = (event) => {
        // Prevent default vertical scrolling
        event.preventDefault();
        // Adjust scrollLeft based on the mouse wheel deltaY
        // Multiplied by 2.0 for faster scroll speed
        merchContainer.scrollLeft += event.deltaY * 2.0; // Increased multiplier for faster scrolling
      };

      // Add the event listener to the container
      merchContainer.addEventListener('wheel', handleWheelScroll);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        merchContainer.removeEventListener('wheel', handleWheelScroll);
      };
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    // Same height as Production section (h-96), black background
    // Changed section to a flex column to properly distribute space
    <section className="w-full p-8 bg-[#54463a] text-white h-[500px] flex flex-col">
      {/* Custom styles for scrollbar hiding and smooth scrolling with hover effect */}
      <style>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
        .merch-scroll-container::-webkit-scrollbar {
          width: 4px; /* Thin scrollbar */
          height: 4px;
        }

        .merch-scroll-container::-webkit-scrollbar-track {
          background: transparent; /* Transparent track */
        }

        .merch-scroll-container::-webkit-scrollbar-thumb {
          background-color: transparent; /* Invisible by default */
          border-radius: 2px; /* Rounded corners for the thumb */
          transition: background-color 0.3s ease-in-out; /* Smooth transition for appearance */
        }

        /* Show scrollbar thumb on hover of the container */
        .merch-scroll-container:hover::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5); /* Grey, slightly transparent, on hover */
        }

        /* Firefox */
        .merch-scroll-container {
          scrollbar-width: thin; /* Thin scrollbar for Firefox */
          scrollbar-color: transparent transparent; /* Thumb and track transparent by default */
          scroll-behavior: smooth; /* Smooth scrolling */
        }

        /* Show scrollbar thumb on hover for Firefox */
        .merch-scroll-container:hover {
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent; /* Thumb visible on hover for Firefox */
        }
      `}</style>

      {/* Increased margin-bottom (mb-8) for more space below the title */}
      <h2 className="text-7xl font-extrabold mb-8 text-left uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#FFDBBB' }}>
        Merch
      </h2>
      {/* Horizontal scroll container */}
      {/* Replaced fixed height calc with flex-grow and added padding-top (pt-4) for buffer space */}
      <div
        ref={merchContainerRef} // Attach the ref to this div
        className="flex overflow-x-auto pb-4 merch-scroll-container flex-grow pt-4" // Added merch-scroll-container class
      >
        {merchItems.map((item) => (
          <MerchCard key={item.id} item={item} url={item.url}/>
        ))}
      </div>
    </section>
  );
};

export default Merch;
