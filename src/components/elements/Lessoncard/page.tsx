import React from 'react';
import Link from 'next/link';

interface LessonCardProps {
  title: string;
  description: string;
  link: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({ title, description, link }) => {
  return (
    <div className="col">
        <Link href={link} className="block p-4 border bg-orange-500 text-white  rounded-lg shadow-lg  hover:bg-orange-600 transition hover:scale-105">
          <div className="flex items-center mb-2">
            <h2 className="text-4xl text-center font-bold">{title}</h2>
          </div>
          <p className="mb-4 opacity-0 text-white hover:opacity-100 transition-opacity  duration-300  rounded-xl">
            {description}
          </p>
        </Link>
    </div>
  );
};

export default LessonCard;
