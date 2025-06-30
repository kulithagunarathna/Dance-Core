import React, { useState, useEffect, useMemo } from 'react'; // <--- Import useMemo
import classSchedules from '../utils/classSchedules'; // Ensure this path is correct

// Import the event image
import freeDanceWorkshopImage from '../assets/images/events/event-1.webp'; // Adjust the path if needed
import freeDanceWorkshopImage2 from '../assets/images/events/event-2.jpeg'; // Adjust the path if needed

const Classes = () => {
  // Use useMemo to memoize 'locations' array
  // This ensures 'locations' maintains the same reference across renders,
  // preventing it from triggering the useEffect infinitely.
  const locations = useMemo(() => Object.keys(classSchedules), []); // <--- Fixed: useMemo with empty dependency array
  
  const daysOfWeek = useMemo(() => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], []); // <--- Optional: memoize daysOfWeek too for consistency, though it's already stable

  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [filteredClasses, setFilteredClasses] = useState([]);

  // Define your event data here
  const events = [
    {
      id: 2,
      imageUrl: freeDanceWorkshopImage2,
      status: ''
    },
    {
      id: 1,
      imageUrl: freeDanceWorkshopImage,
      status: 'closed' // Set status to 'closed' as it's already done
    },
  ];

  // Effect to update filtered classes whenever selections change
  useEffect(() => {
    let currentFilteredClasses = [];

    // Only filter if at least one selection is made
    if (selectedPlace || selectedDay) {
      // Case 1: Both place and day selected
      if (selectedPlace && selectedDay) {
        currentFilteredClasses = classSchedules[selectedPlace]?.[selectedDay] || [];
      }
      // Case 2: Only place selected
      else if (selectedPlace) {
        for (const day of daysOfWeek) { // daysOfWeek is now stable
          const classesForDay = classSchedules[selectedPlace]?.[day] || [];
          currentFilteredClasses = currentFilteredClasses.concat(classesForDay.map(cls => ({
            ...cls,
            day: day, // Add day information for display
            location: selectedPlace // Add location information
          })));
        }
      }
      // Case 3: Only day selected
      else if (selectedDay) {
        for (const place of locations) { // locations is now stable
          const classesForDay = classSchedules[place]?.[selectedDay] || [];
          currentFilteredClasses = currentFilteredClasses.concat(classesForDay.map(cls => ({
            ...cls,
            day: selectedDay, // Add day information
            location: place // Add location information
          })));
        }
      }
    }
    // If no selection is made, set filteredClasses to empty to show the prompt
    setFilteredClasses(currentFilteredClasses);
  }, [selectedPlace, selectedDay, locations, daysOfWeek]); // dependencies are now stable

  const getHeaderText = () => {
    if (selectedPlace && selectedDay) {
      return `${selectedDay} Classes at ${selectedPlace}`;
    } else if (selectedPlace) {
      return `All Classes at ${selectedPlace}`;
    } else if (selectedDay) {
      return `All Classes on ${selectedDay}`;
    } else {
      return 'Select a Place and/or Day to View Schedule';
    }
  };

  const getEmptyMessage = () => {
    if (selectedPlace === '' && selectedDay === '') {
      return 'Please make your selections to see the class schedule.';
    } else if (selectedPlace && selectedDay) {
      return `No classes scheduled for ${selectedDay} at ${selectedPlace}.`;
    } else if (selectedPlace) {
      return `No classes found at ${selectedPlace}.`;
    } else if (selectedDay) {
      return `No classes found on ${selectedDay}.`;
    }
    return 'No classes found based on your selection.';
  };


  return (
    <section className="p-8 w-full bg-[#F7D9BC] text-black">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-8 uppercase text-center" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em' }}>
        Classes / Events
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto">
        {/* Left Column: Selection Controls + Class Schedule */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          {/* Select Place */}
          <label htmlFor="place-select" className="sr-only">Select Location</label>
          <select
            id="place-select"
            className="p-3 rounded-md bg-white text-black focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-md"
            value={selectedPlace}
            onChange={(e) => setSelectedPlace(e.target.value)}
          >
            <option value="">Select a Place</option>
            {locations.map((place) => (
              <option key={place} value={place}>{place}</option>
            ))}
          </select>

          {/* Select Day */}
          <label htmlFor="day-select" className="sr-only">Select Day</label>
          <select
            id="day-select"
            className="p-3 rounded-md bg-white text-black focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-md"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="">Select a Day</option>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>

          {/* Class Schedule Display */}
          <div className="w-full bg-white rounded-xl p-4 overflow-y-auto shadow-lg mt-4" style={{maxHeight: '400px'}}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
              {getHeaderText()}
            </h3>
            {filteredClasses.length > 0 ? (
              <ul className="space-y-3">
                {filteredClasses.map((cls, index) => (
                  <li key={index} className="bg-gray-800 p-3 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-md">
                    <div>
                      <p className="text-lg font-medium text-white">{cls.name}</p>
                      <p className="text-sm text-gray-300">{cls.time}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <p className="text-md text-gray-400">Instr: {cls.instructor}</p>
                      {!(selectedPlace && selectedDay) && (
                        <p className="text-xs text-gray-500 mt-1">{cls.day} at {cls.location}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">
                {getEmptyMessage()}
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Events Card */}
        <div className="w-full md:w-1/2 bg-white rounded-xl p-4 shadow-lg flex flex-col space-y-4" style={{maxHeight: '350px'}}>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
            Events
          </h3>
          <div className="overflow-y-auto space-y-4">
            {events.map(event => (
              <div key={event.id} className="relative rounded-md overflow-hidden shadow-sm">
                <img
                  src={event.imageUrl}
                  alt={event.name || 'Event Image'} // Added fallback for alt text
                  className="w-full h-auto object-cover"
                />
                {event.status === 'closed' && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <p className="text-white text-3xl font-bold uppercase tracking-wider">CLOSED</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;