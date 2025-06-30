// src/components/PersonProfileCard.jsx
import React from 'react';

const PersonProfileCard = ({ name, roles, imageUrl, instagramUrl }) => { // Add instagramUrl here
  return (
    <> {/* Use a React Fragment to wrap multiple top-level elements */}
      <div className="flex flex-col items-center p-10
                      md:flex-row md:items-center md:justify-center md:space-x-16 lg:space-x-24">
        {/* Profile Image Wrapper - Contains the pop-up card */}
        <div className="mb-10 md:mb-0 md:flex-shrink-0">
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] cursor-pointer group">
            {/* Front of the card - Now acts as the main image that pops up */}
            {instagramUrl ? ( // Conditionally render the link if instagramUrl is provided
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageUrl} // Main image
                  alt={`${name} - Front`}
                  className="absolute inset-0 w-full h-full rounded-lg shadow-lg
                             transition-transform duration-300 ease-out
                             group-hover:scale-105 group-hover:shadow-2xl" // Pop-up effect on hover
                />
              </a>
            ) : (
              <img
                src={imageUrl} // Main image
                alt={`${name} - Front`}
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg
                           transition-transform duration-300 ease-out
                           group-hover:scale-105 group-hover:shadow-2xl" // Pop-up effect on hover
              />
            )}
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-[#f0e6d2] p-10 rounded-xl shadow-xl text-gray-800 w-full max-w-lg lg:max-w-xl">
          <h2 className="font-sans text-3xl font-bold mb-5 leading-tight md:text-4xl lg:text-5xl">
            {name}
          </h2>
          <div className="space-y-3">
            {roles.map((role, index) => (
              <p key={index} className="font-mono text-lg tracking-widest uppercase md:text-xl">
                {role}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Add the <hr> with gray-200 color here */}
      <hr className="my-10 border-t-2 border-gray-200 w-full max-w-5xl mx-auto" />
    </>
  );
};

export default PersonProfileCard;