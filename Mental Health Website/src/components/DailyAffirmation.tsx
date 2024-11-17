import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const affirmations = [
  "You are enough, just as you are",
  "Every day is a fresh start",
  "You have the power to create change",
  "Your potential is limitless",
  "You are worthy of love and respect",
  "Your feelings are valid",
  "You've got this!",
  "Today will be a great day",
  "You are stronger than you know",
  "Your presence matters"
];

export default function DailyAffirmation() {
  const [affirmation, setAffirmation] = useState(affirmations[0]);

  const generateAffirmation = () => {
    const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    setAffirmation(newAffirmation);
  };

  return (
    <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Sparkles className="mr-2" /> Daily Affirmation
      </h2>
      <p className="text-lg mb-4 text-center italic">{affirmation}</p>
      <button
        onClick={generateAffirmation}
        className="w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition"
      >
        Generate New Affirmation
      </button>
    </div>
  );
}