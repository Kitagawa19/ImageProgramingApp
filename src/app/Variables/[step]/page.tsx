'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/layouts/Header';
import { VariableImage } from '@/components/elements/VariableImage/index';
import { NavigationButton } from '@/components/elements/NavigationButton/index';
import { MaxSteps, StepConfig } from '@/components/elements/VariableImage/step';



const StepPage = () => {
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const pathname = usePathname();
  const step = pathname.split('/').pop();
  const stepNumber = step ? parseInt(step, 10) : 0;
  const stepConfig = MaxSteps[stepNumber];

  if (!stepConfig) {
    return <div>ステップが見つかりません。</div>;
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleQuestion = (event: React.DragEvent<HTMLDivElement>, value: number) => {
    event.preventDefault();
    setUserAnswer(value);
    setIsCorrect(value == stepConfig.correctAnswer);
  };

  const renderItem = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(
        <img
          key={i}
          src={`/Numbers/${i}.png`}
          alt={`Number ${i}`}
          draggable
          className="w-12 h-12 cursor-grab mb-4"
          onDragStart={(event) => event.dataTransfer.setData('text/plain', String(i))}
        />
      );
    }
    return items;
  };

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-4">変数の学習</h1>
      <div className='flex justify-around'>
        {stepConfig.problem && (
          <div className="mt-8 text-center">
            <h2 className="text-xl mb-4">{stepConfig.problem}</h2>
            <div className="flex justify-center flex-wrap">{renderItem()}</div>
            <div className="flex justify-center items-center mt-4">
              <div
                className="w-48 h-48 border-2 flex justify-center items-center text-lg mt-4"
                onDrop={(event) => handleQuestion(event, parseInt(event.dataTransfer.getData('text/plain'), 10))}
                onDragOver={handleDragOver}
              >
                ドロップして答えを入力
              </div>
              {userAnswer !== null && (
                <div className="ml-4">
                  <h2 className="text-xl">あなたの答えは:{userAnswer}</h2>
                  {isCorrect !== null && (
                    <h2 className={`text-xl ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                      {isCorrect ? '正解です' : '不正解です'}
                    </h2>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <VariableImage />
      <div className="flex justify-between mt-8">
        {stepNumber > 1 && (
          <NavigationButton label="前へ" href={`/Variables/${stepNumber - 1}`} />
        )}
        {stepNumber < Object.keys(MaxSteps).length && (
          <NavigationButton label="次へ" href={`/Variables/${stepNumber + 1}`} />
        )}
      </div>
    </div>
  )
}
export default StepPage;