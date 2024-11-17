import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, History, Award } from 'lucide-react';

interface UserData {
  email: string;
}

export default function Profile() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
      return;
    }
    setUserData(JSON.parse(user));
  }, [navigate]);

  if (!userData) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-[#F5F5DC] rounded-lg shadow-md p-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-rose-100 p-4 rounded-full">
            <User className="w-8 h-8 text-rose-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{userData.email}</h1>
            <p className="text-gray-600">Member since {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <History className="mr-2" /> Recent Assessments
            </h2>
            <p className="text-gray-600">No assessments completed yet.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2" /> Progress Tracking
            </h2>
            <p className="text-gray-600">Complete an assessment to track your progress.</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/assessment')}
          className="mt-8 w-full bg-rose-500 text-white py-3 px-6 rounded-md hover:bg-rose-600 transition"
        >
          Take New Assessment
        </button>
      </div>
    </div>
  );
}