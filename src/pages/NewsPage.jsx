import React from 'react';
import NavBar from '../components/NavBar'; // Ensure NavBar is imported
import NewsCard from '../components/NewsCard.jsx'; // <--- Import the new NewsCard component

// Import your news item images
import freeDanceWorkshopImage from '../assets/images/events/event-1.webp';
import freeDanceWorkshopImage2 from '../assets/images/events/event-2.jpeg';

const NewsPage = () => {
  // Define your news items as an array of objects
  const newsItems = [
    {
      id: 'news-1', // Unique ID is crucial for React keys
      imageUrl: freeDanceWorkshopImage2,
      title: 'FREE DAY',
      description: 'Every Month Last Day - Free Day',
      date: '2025',
      time: '',
      location: 'Studio Dance Core, SHELDAN INTERNATIONA SCHOOL - Malabe',
    },
    {
      id: 'news-2', // Unique ID is crucial for React keys
      imageUrl: freeDanceWorkshopImage,
      title: 'Free Dance Workshop!',
      description: 'Join us for a fantastic free dance workshop this Saturday, July 5, 2025, at our Kalutara studio! Learn basic choreography and meet our instructors. All skill levels welcome.',
      date: 'July 5, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Studio Dance Core, Kalutara',
    }
  ];

  return (
    <>
      {/* Assuming NavBar handles its own responsiveness */}
      <NavBar setActivePage='news' /> {/* Added setActivePage prop for NavBar */}
      <main className="min-h-screen bg-black text-gray-400 p-4 sm:p-6 md:p-8 flex flex-col items-center"> {/* Adjusted padding and set background color */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center text-white">Studio Dance Core News</h1> {/* Responsive font size and margin */}
        <div className="max-w-xl sm:max-w-2xl md:max-w-4xl text-center mb-6 sm:mb-8 px-2"> {/* Adjusted max-width and added horizontal padding */}
          <p className="text-base sm:text-lg mb-3"> {/* Responsive font size and margin */}
            Welcome to our News page! This is where we share all the latest updates, events, and exciting announcements from Studio Dance Core.
          </p>
          <p className="text-sm sm:text-base"> {/* Responsive font size */}
            Stay tuned for upcoming performances, workshop schedules, student achievements, and more!
          </p>
        </div>

        {/* Render news items using the NewsCard component */}
        {/* Added gap for spacing between cards and adjusted max-width */}
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl space-y-8 sm:space-y-10">
          {newsItems.map(item => (
            <NewsCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
              location={item.location}
            />
          ))}
          {newsItems.length === 0 && (
            <p className="text-xl text-gray-400 text-center mt-10">No news updates at the moment. Please check back later!</p>
          )}
        </div>
      </main>
    </>
  );
};

export default NewsPage;