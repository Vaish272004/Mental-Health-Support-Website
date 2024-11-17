import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, User, Home, ClipboardCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#FFF8DC] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="text-xl font-semibold">MindfulMe</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center space-x-1 hover:text-rose-500 transition">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/assessment" className="flex items-center space-x-1 hover:text-rose-500 transition">
              <ClipboardCheck className="h-5 w-5" />
              <span>Assessment</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-rose-500 transition">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}