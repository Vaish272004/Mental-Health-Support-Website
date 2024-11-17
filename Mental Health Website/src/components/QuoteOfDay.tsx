import React from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  { text: "Mental health is not a destination, but a process", author: "Noam Shpancer" },
  { text: "You don't have to control your thoughts. You just have to stop letting them control you", author: "Dan Millman" },
  { text: "Self-care is not self-indulgence, it is self-preservation", author: "Audre Lorde" },
  { text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity", author: "Unknown" }
];

export default function QuoteOfDay() {
  // Use the current date to select a quote, so it changes daily
  const today = new Date();
  const index = today.getDate() % quotes.length;
  const quote = quotes[index];

  return (
    <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Quote className="mr-2" /> Quote of the Day
      </h2>
      <blockquote className="italic text-lg mb-2">"{quote.text}"</blockquote>
      <p className="text-right text-gray-600">- {quote.author}</p>
    </div>
  );
}