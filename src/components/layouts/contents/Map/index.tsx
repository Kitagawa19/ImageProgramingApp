import React from 'react';
import Link from 'next/link';

const lessons = [
  { id: '1', title: '変数とは' },
  { id: '2', title: '変数を使った問題1' },
  { id: '3', title: '変数を使った問題2' },
  { id: '4', title: '変数を使った問題3' },
  { id: '5', title: '変数を使った問題4' },
  { id: '6', title: '変数の応用問題1' },
  { id: '7', title: '変数の応用問題2' },
];

export const Map = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">マップ</h1>
      <div className="relative w-full max-w-3xl mx-auto bg-green-500 p-8 rounded-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/path/to/map-image.png)' }}></div>
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {lessons.map((lesson, index) => (
            <Link key={lesson.id} href={`/Variables/${lesson.id}`}>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center transition-transform transform hover:scale-110">
                <div className="text-center">
                  <div className="text-2xl font-bold">{index + 1}</div>
                  <div className="mt-2">{lesson.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
