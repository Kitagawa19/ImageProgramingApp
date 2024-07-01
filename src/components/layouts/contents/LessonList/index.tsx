import React from "react";
import { LessonCard } from "@/components/elements/LessonCard/index";

const lessons = [
  {
    title: "変数",
    description: "変数について学びます",
    link: "/Variables/1"
  },
  {
    title: '条件分岐',
    description: '条件分岐の使い方を学びます。',
    link: '/Conditionals/1',
  },
  {
    title: 'ループ',
    description: 'ループの使い方を学びます。',
    link: '/Loops/1',
  },
  {
    title: '関数',
    description: '関数の基本を学びます。',
    link: '/Functions/1',
  },
]

export const LessonList = () => {
  return(
    <div className="p-4 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">レッスン一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.title}
            title={lesson.title}
            description={lesson.description}
            link={lesson.link}
          />
        ))}
      </div>
    </div>
  )
}