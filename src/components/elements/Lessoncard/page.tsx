import React from 'react';

interface LessonCardProps {
  title: string;
  description: string;
  link: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({ title, description, link }) => {
  return (
    <a href={link} className="block p-4 border rounded-lg shadow-lg hover:bg-gray-100 transition">
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p>{description}</p>
    </a>
  );
};

export default LessonCard;
