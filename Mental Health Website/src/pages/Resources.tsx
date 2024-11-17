import React from 'react';
import { BookOpen, Link as LinkIcon, Heart } from 'lucide-react';

const resources = [
  {
    category: "Stress Management",
    links: [
      { title: "Mindfulness Meditation Guide", url: "https://www.mindful.org/meditation/mindfulness-getting-started/" },
      { title: "Stress Reduction Techniques", url: "https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response" }
    ]
  },
  {
    category: "Sleep Hygiene",
    links: [
      { title: "Sleep Foundation Tips", url: "https://www.sleepfoundation.org/sleep-hygiene" },
      { title: "Better Sleep Guide", url: "https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html" }
    ]
  },
  {
    category: "Anxiety Management",
    links: [
      { title: "Anxiety Coping Strategies", url: "https://www.anxietycanada.com/articles/new-to-anxiety/" },
      { title: "Self-Help for Anxiety", url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/self-care/" }
    ]
  }
];

export default function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center justify-center">
        <BookOpen className="mr-2" /> Mental Health Resources
      </h1>

      <div className="space-y-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Heart className="mr-2" /> {resource.category}
            </h2>
            <div className="space-y-3">
              {resource.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 transition"
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}