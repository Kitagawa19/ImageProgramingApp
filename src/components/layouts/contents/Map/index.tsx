import React from 'react';
import Link from 'next/link';

const lessons = [
  { id: '1-1', title: '変数とは' },
  { id: '1-2', title: '変数を使った問題1' },
  { id: '1-3', title: '変数を使った問題2' },
  { id: '1-4', title: '変数を使った問題3' },
  { id: '1-5', title: '変数を使った問題4' },
  { id: '1-6', title: '変数の応用問題1' },
  { id: '1-7', title: '変数の応用問題2' },
];

export const Map = () => {
  return (
    <div className="map">
      <h1>マップ</h1>
      <div className="lessons">
        {lessons.map(lesson => (
          <Link key={lesson.id} href={`/lessons/${lesson.id}`}>
            {lesson.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
