import React, { useState } from 'react';
import { ClipboardCheck, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "How often do you feel overwhelmed by your daily tasks?",
    options: ["Never", "Sometimes", "Often", "Always"],
    category: "stress"
  },
  {
    id: 2,
    question: "How would you rate your sleep quality?",
    options: ["Excellent", "Good", "Fair", "Poor"],
    category: "sleep"
  },
  {
    id: 3,
    question: "How often do you feel lonely or isolated?",
    options: ["Never", "Sometimes", "Often", "Always"],
    category: "social"
  },
  {
    id: 4,
    question: "How often do you feel anxious without a clear reason?",
    options: ["Never", "Sometimes", "Often", "Always"],
    category: "anxiety"
  },
  {
    id: 5,
    question: "How often do you feel down or depressed?",
    options: ["Never", "Sometimes", "Often", "Always"],
    category: "mood"
  },
  {
    id: 6,
    question: "How well can you concentrate on tasks?",
    options: ["Very well", "Well", "Poorly", "Very poorly"],
    category: "focus"
  },
  {
    id: 7,
    question: "How often do you feel satisfied with your daily achievements?",
    options: ["Always", "Often", "Sometimes", "Never"],
    category: "satisfaction"
  },
  {
    id: 8,
    question: "How often do you engage in activities you enjoy?",
    options: ["Daily", "Weekly", "Monthly", "Rarely"],
    category: "leisure"
  },
  {
    id: 9,
    question: "How would you rate your energy levels throughout the day?",
    options: ["Excellent", "Good", "Fair", "Poor"],
    category: "energy"
  },
  {
    id: 10,
    question: "How often do you practice self-care activities?",
    options: ["Daily", "Weekly", "Monthly", "Rarely"],
    category: "self-care"
  }
];

export default function Assessment() {
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateResults = () => {
    const categories = {
      stress: "Stress Management",
      sleep: "Sleep Hygiene",
      social: "Social Connection",
      anxiety: "Anxiety Management",
      mood: "Mood Regulation",
      focus: "Concentration",
      satisfaction: "Life Satisfaction",
      leisure: "Work-Life Balance",
      energy: "Energy Management",
      "self-care": "Self-Care Practices"
    };

    const problemAreas = questions
      .filter((q) => (answers[q.id] ?? 0) > 1)
      .map((q) => categories[q.category as keyof typeof categories]);

    return problemAreas;
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setShowResults(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center justify-center">
        <ClipboardCheck className="mr-2" /> Mental Health Assessment
      </h1>

      {!showResults ? (
        <div className="space-y-8">
          {questions.map((q) => (
            <div key={q.id} className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
              <p className="text-lg font-medium mb-4">{q.question}</p>
              <div className="grid grid-cols-2 gap-4">
                {q.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(q.id, index)}
                    className={`p-3 rounded-md transition ${
                      answers[q.id] === index
                        ? 'bg-rose-500 text-white'
                        : 'bg-white hover:bg-rose-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full bg-rose-500 text-white py-3 px-6 rounded-md hover:bg-rose-600 transition"
          >
            Submit Assessment
          </button>
        </div>
      ) : (
        <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" /> Your Results
          </h2>
          <div className="space-y-4">
            <p className="text-lg">Based on your responses, here are the areas you might want to focus on:</p>
            <ul className="list-disc list-inside space-y-2">
              {calculateResults().map((area, index) => (
                <li key={index} className="text-rose-600">{area}</li>
              ))}
            </ul>
            <div className="mt-6">
              <button
                onClick={() => navigate('/resources')}
                className="w-full bg-rose-500 text-white py-3 px-6 rounded-md hover:bg-rose-600 transition"
              >
                View Resources
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}