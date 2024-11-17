import React, { useState } from 'react';
import { CheckSquare } from 'lucide-react';

const initialTasks = [
  { id: 1, text: "Drink water", completed: false },
  { id: 2, text: "Take a break", completed: false },
  { id: 3, text: "Stretch for 5 minutes", completed: false },
  { id: 4, text: "Practice deep breathing", completed: false },
  { id: 5, text: "Get some sunlight", completed: false }
];

export default function SelfCareChecklist() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <CheckSquare className="mr-2" /> Self-Care Checklist
      </h2>
      <div className="space-y-3">
        {tasks.map(task => (
          <div
            key={task.id}
            className="flex items-center space-x-3"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="h-5 w-5 rounded border-gray-300 text-rose-500 focus:ring-rose-500"
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}