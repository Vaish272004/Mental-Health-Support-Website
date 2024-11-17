import React from 'react';
import { Phone } from 'lucide-react';
import DailyAffirmation from '../components/DailyAffirmation';
import SelfCareChecklist from '../components/SelfCareChecklist';
import QuoteOfDay from '../components/QuoteOfDay';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Welcome to MindfulMe</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <DailyAffirmation />
          <QuoteOfDay />
        </div>
        
        <div className="space-y-8">
          <SelfCareChecklist />
          
          <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Phone className="mr-2" /> Emergency Helplines
            </h2>
            <div className="space-y-3">
              <a href="tel:988" className="block text-blue-600 hover:underline">
                988 - Suicide & Crisis Lifeline
              </a>
              <a href="tel:1-800-662-4357" className="block text-blue-600 hover:underline">
                1-800-662-4357 - SAMHSA's National Helpline
              </a>
              <a href="tel:1-800-273-8255" className="block text-blue-600 hover:underline">
                1-800-273-8255 - Veterans Crisis Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}