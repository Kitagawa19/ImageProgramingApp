'use client'

import React from "react";
import { LessonCard } from "@/components/elements/LessonCard/index";
import { motion } from "framer-motion";

const lessons = [
  {
    title: "変数",
    description: "変数について学びます",
    link: "/Map",
    icon: "🔢"
  },
  {
    title: '条件分岐',
    description: '条件分岐の使い方を学びます。',
    link: '/Conditionals/1',
    icon: "🔀"
  },
  {
    title: 'ループ',
    description: 'ループの使い方を学びます。',
    link: '/Loops/1',
    icon: "🔄"
  },
  {
    title: '関数',
    description: '関数の基本を学びます。',
    link: '/Functions/1',
    icon: "🧩"
  },
]

export const LessonList: React.FC = () => {
  return(
    <div className="p-8 min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100">
      <motion.h1 
        className="text-5xl font-bold mb-8 text-center text-orange-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        プログラミング基礎レッスン
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <LessonCard
              title={lesson.title}
              description={lesson.description}
              link={lesson.link}
              icon={lesson.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}