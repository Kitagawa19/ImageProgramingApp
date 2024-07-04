'use client';
import React, { useState } from 'react';
import { ChoiceOption } from '@/components/elements/ChoiceOption/option';

export const ConditionalsImage: React.FC = () => {
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, season: string) => {
    event.preventDefault();
    const draggedText = event.dataTransfer.getData('text/plain');
    if ((season === 'spring' && draggedText === '春') ||
        (season === 'summer' && draggedText === '夏') ||
        (season === 'autumn' && draggedText === '秋') ||
        (season === 'winter' && draggedText === '冬')) {
      setFeedback(`正解です！${draggedText}の季節に合った行動をしましたね。`);
    } else {
      setFeedback('もう一度試してみてください。');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mt-4">
      <div className="flex justify-around">
        <div
          className="w-48 h-48 border-2 border-dashed flex justify-center items-center"
          onDrop={(event) => handleDrop(event, 'spring')}
          onDragOver={handleDragOver}
        >
          <img
            src="/Season/spring.png"
            className="w-full h-full"
            alt="春"
            draggable={false}
          />
        </div>
        <div
          className="w-48 h-48 border-2 border-dashed flex justify-center items-center"
          onDrop={(event) => handleDrop(event, 'summer')}
          onDragOver={handleDragOver}
        >
          <img
            src="/Season/summer.png"
            className="w-full h-full"
            alt="夏"
            draggable={false}
          />
        </div>
        <div
          className="w-48 h-48 border-2 border-dashed flex justify-center items-center"
          onDrop={(event) => handleDrop(event, 'autumn')}
          onDragOver={handleDragOver}
        >
          <img
            src="/Season/autumn.png"
            className="w-full h-full"
            alt="秋"
            draggable={false}
          />
        </div>
        <div
          className="w-48 h-48 border-2 border-dashed flex justify-center items-center"
          onDrop={(event) => handleDrop(event, 'winter')}
          onDragOver={handleDragOver}
        >
          <img
            src="/Season/winter.png"
            className="w-full h-full"
            alt="冬"
            draggable={false}
          />
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <ChoiceOption text="春" draggable />
        <ChoiceOption text="夏" draggable />
        <ChoiceOption text="秋" draggable />
        <ChoiceOption text="冬" draggable />
      </div>
      {feedback && <p className="text-xl mt-4">{feedback}</p>}
    </div>
  );
};
