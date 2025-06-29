import React, { useState, useEffect } from 'react';
import classSchedules from '../utils/classSchedules';

const Classes = () => {
  const locations = Object.keys(classSchedules);
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [filteredClasses, setFilteredClasses] = useState([]);

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
        for (const day of daysOfWeek) {
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
        for (const place of locations) {
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
  }, [selectedPlace, selectedDay]); // Dependencies: re-run when these change

  const getHeaderText = () => {
    if (selectedPlace && selectedDay) {
      return `${selectedDay} Classes at ${selectedPlace}`;
    } else if (selectedPlace) {
      return `All Classes at ${selectedPlace}`;
    } else if (selectedDay) {
      return `All Classes on ${selectedDay}`;
    } else {
      return 'Select a Place and/or Day to View Schedule'; // Changed default header
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
    return 'No classes found based on your selection.'; // Fallback, though previous conditions cover most cases
  };


  return (
    <section className="p-8 w-full bg-[#F7D9BC] text-white h-[500px] flex flex-col"> 
      <h2 className="text-5xl md:text-7xl font-extrabold mb-8 uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: 'black' }}>
        Classes
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl"> {/* Centered content area */}
        {/* Left side: Selection Controls */}
        <div className="w-full md:w-1/3 flex flex-col space-y-4">
          <label htmlFor="place-select" className="sr-only">Select Location</label> {/* Accessibility */}
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

          <label htmlFor="day-select" className="sr-only">Select Day</label> {/* Accessibility */}
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
        </div>

        {/* Right side: Class Schedule Display */}
        <div className="w-full md:w-2/3 bg-white rounded-xl p-4 overflow-y-auto shadow-lg">
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
                    {/* Only show day/location if not explicitly filtered by both */}
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
    </section>
  );
};

export default Classes;
