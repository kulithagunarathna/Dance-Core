import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Manoloka from './pages/Manoloka';
import NewsPage from './pages/NewsPage';

const App = () => {

  const [activePage, setActivePage] = useState('home');
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage setActivePage={setActivePage} />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/manoloka" element={<Manoloka />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Router>
        <Footer />
    </>
  );
};

export default App;
