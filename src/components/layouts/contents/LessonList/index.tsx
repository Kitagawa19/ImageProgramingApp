import React,{ FC } from "react";
import { LessonCard } from "../../../elements/Lessoncard/page";

const lessons = [
  {
    title: "変数",
    description: "変数について学びます",
    link: "/variables"
  },
  {
    title: '条件分岐のレッスン',
    description: '条件分岐の使い方を学びます。',
    link: '/conditionals',
  },
  {
    title: 'ループのレッスン',
    description: 'ループの使い方を学びます。',
    link: '/loops',
  },
  {
    title: '関数のレッスン',
    description: '関数の基本を学びます。',
    link: '/functions',
  },
]

export const LessonList:React.FC = () => {
  return(
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">レッスン一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
  );
};
export default LessonList;