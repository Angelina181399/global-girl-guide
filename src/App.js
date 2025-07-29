// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OutfitPage from './components/OutfitPage';
import ResourcesPage from './components/ResourcesPage';
import DictionaryPage from './components/DictionaryPage';
import CommunityPage from './components/CommunityPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/outfit" element={<OutfitPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
