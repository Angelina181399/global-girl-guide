// src/App.js
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import OutfitPage from "./components/OutfitPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/outfit" element={<OutfitPage />} />
        </Routes>
        {/* 这个组件会自动收集性能数据 */}
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;