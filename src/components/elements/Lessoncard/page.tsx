import React from 'react';
import Link from 'next/link';

interface LessonCardProps {
  title: string;
  description: string;
  link: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({ title, description, link }) => {
  return (
    <div className="col max-w-lg  flex flex-col justify-center items-cener">
        <Link href={link} className="block p-4 border bg-orange-500 text-white  rounded-lg shadow-lg  hover:bg-orange-600 transition hover:scale-105 group">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold">{title}</h2>
          </div>
          <p className="mt-4 opacity-0  group-hover:opacity-100 transition-opacity  duration-300 group-hover:text-white ">
            {description}
          </p>
        </Link>
    </div>
  );
};

export default LessonCard;
