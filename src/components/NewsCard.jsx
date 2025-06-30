import React from 'react';

const NewsCard = ({ imageUrl, title, description, date, time, location }) => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 mb-6 sm:mb-8"> {/* Adjusted padding and gap for mobile */}
      {/* News Image */}
      <div className="w-full md:w-1/3 flex-shrink-0"> {/* Image takes full width on small screens */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-md object-cover shadow-sm"
        />
      </div>

      {/* News Content */}
      <div className="w-full md:w-2/3 text-left"> {/* Content takes full width on small screens */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-gray-900">{title}</h2> {/* Responsive font size */}
        <p className="text-sm sm:text-base text-gray-700 mb-2"> {/* Responsive font size */}
          {description}
        </p>
        <p className="text-xs sm:text-sm text-gray-500"> {/* Responsive font size */}
          Date: {date} | Time: {time} | Location: {location}
        </p>
        {/* Optional: Add a button for 'Read More' or 'Register' */}
        {/* <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">Read More</button> */}
      </div>
    </div>
  );
};

export default NewsCard;