import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';

import HomePage from './pages/HomePage';
import WinePage from './pages/WinePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wines" element={<WinePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;