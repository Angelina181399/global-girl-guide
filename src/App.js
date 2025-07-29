import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OutfitPage from './components/OutfitPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/outfit" element={<OutfitPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 