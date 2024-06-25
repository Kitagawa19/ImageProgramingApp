'use client'
import React,{ useState } from 'react';
import Link from 'next/link';

interface LessonCardProps {
  title: string;
  description: string;
  link: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({ title, description, link }) => {
  const [ IsHovered,setIsHovered ] = useState(false);

  const  handleMouseEnter = () => setIsHovered(true);
  const  handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="col flex justify-center items-cener"
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }
            >
        <Link href={link} className="block w-full max-w-2xl p-4 border bg-orange-500 text-white  rounded-lg shadow-lg  hover:bg-orange-600 transition hover:scale-105 group">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold">{title}</h2>
          </div>
          <p className={`mt-4 transition-opacity duration-300 group-hover:text-white ${IsHovered ? "opacity-100":"opacity-100 sm:opacity-0 group-hover:opacity-100"}`}>
            {description}
          </p>
        </Link>
    </div>
  );
};


