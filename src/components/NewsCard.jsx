import React from 'react';

const NewsCard = ({ imageUrl, title, description, date, time, location }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
      {/* News Image */}
      <div className="md:w-1/3 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-md object-cover shadow-sm"
        />
      </div>

      {/* News Content */}
      <div className="md:w-2/3 text-left">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-700 mb-2">
          {description}
        </p>
        <p className="text-sm text-gray-500">
          Date: {date} | Time: {time} | Location: {location}
        </p>
        {/* Optional: Add a button for 'Read More' or 'Register' */}
        {/* <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">Read More</button> */}
      </div>
    </div>
  );
};

export default NewsCard;