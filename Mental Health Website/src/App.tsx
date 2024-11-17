import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Assessment from './pages/Assessment';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF0E6]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;