'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

interface LessonCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({ title, description, link, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="col flex justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={link} className="block w-full max-w-2xl hover:bg-orange-600 transition hover:scale-105 group">
        <motion.div 
          className="p-6 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition group h-full flex flex-col"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col items-center justify-center flex-grow">
            <span className="text-6xl mb-4">{icon}</span>
            <h2 className="text-5xl font-bold text-center">{title}</h2>
          </div>
          <p className={`mt-4 text-center transition-opacity duration-300 group-hover:text-white ${
            isHovered ? "opacity-100" : "opacity-100 sm:opacity-0 group-hover:opacity-100"
          }`}>
            {description}
          </p>
        </motion.div>
      </Link>
    </div>
  );
};