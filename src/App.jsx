import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Manoloka from './pages/Manoloka';
// Main App component
const App = () => {

  const [activePage, setActivePage] = useState('home');
  
  return (
    <>
      <Router> {/* Wrap your app with BrowserRouter */}
        <Routes> {/* Define your routes */}
          <Route path="/" element={<HomePage setActivePage={setActivePage} />} />
          <Route path="/about-us" element={<AboutUsPage />} /> {/* Route for About Us page */}
          <Route path="/manoloka" element={<Manoloka />} /> {/* Route for Manoloka page */}
          {/* Add other routes for Productions, Merch, Classes if they are full pages */}
        </Routes>
      </Router>
        <Footer />
    </>
  );
};

export default App;
