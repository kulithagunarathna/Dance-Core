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
      <NavBar />
      <main className="min-h-screen  text-gray-400 p-8 flex flex-col items-center"> {/* Added bg-gray-900 for full background */}
        <h1 className="text-5xl font-bold mb-6 text-center text-white">Studio Dance Core News</h1>
        <div className="max-w-4xl text-center mb-8">
          <p className="text-xl mb-4">
            Welcome to our News page! This is where we share all the latest updates, events, and exciting announcements from Studio Dance Core.
          </p>
          <p className="text-lg">
            Stay tuned for upcoming performances, workshop schedules, student achievements, and more!
          </p>
        </div>

        {/* Render news items using the NewsCard component */}
        <div className="w-full max-w-4xl"> {/* Container for all news cards */}
          {newsItems.map(item => (
            <NewsCard
              key={item.id} // <--- Important: Use a unique key for each NewsCard
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
              location={item.location}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default NewsPage;