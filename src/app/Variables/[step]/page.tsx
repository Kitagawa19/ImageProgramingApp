'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layouts/Header';
import { VariableImage } from '@/components/elements/VariableImage/page';


interface StepConfig{
  title: string;
  description: string;
  problem?: string;
  correctAnswer?: number;
}

const MaxSteps: { [key: number]: StepConfig }  = {
  1: {
    title: '変数とは',
    description: '変数とは何かを学びます。',
  },
  2: {
    title: '変数を使った問題１',
    description: '変数を使ってみましょう。',
    problem: `カゴに入れた数に３を足した数は？`,
    correctAnswer: 8,
  },
  3: {
    title: '変数を使った問題２',
    description: '変数を使ってみましょう。',
    problem: `カゴに入れた数に2を引いた数は？`,
    correctAnswer: 3,
  },
  4: {
    title: '変数を使った問題３',
    description: '変数を使ってみましょう。',
    problem: `カゴに入れた数に2をかけた数は？`,
    correctAnswer: 10,
  },
  5: {
    title: '変数を使った問題４',
    description: '変数を使ってみましょう。',
    problem: `カゴに入れた数を２で割った数は？`,
    correctAnswer: 8,
  },
  6: {
    title: '変数の活用',
    description: '変数を活用してみましょう。',
  },
};

const StepPage = () => {
  const [itemsInBasket, setItemsInBasket] = useState<number>(0);
  const [userAnswer,setUserAnswer] = useState<number | null>(null);
  const [isCorrect,setIsCorrect] = useState<boolean | null>(null);
  const pathname = usePathname();
  const step = pathname.split('/').pop();
  const stepNumber = step ? parseInt(step, 10) : 0;
  const stepConfig = MaxSteps[stepNumber];

  if (!stepConfig) {
    return <div>ステップが見つかりません。</div>;
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setItemsInBasket(itemsInBasket + 1);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleQuestion = (event: React.DragEvent<HTMLDivElement>, value: number) => {
    event.preventDefault();
    setItemsInBasket(itemsInBasket + 1);
    setUserAnswer(value);
    setIsCorrect( value == stepConfig.correctAnswer);
  };

  const renderItem = () => {
    const items = [];
    for(let i = 0; i < 10; i++){
      items.push(
        <img 
        key={i}
        src={`/Numbers/${i}.png`}
        alt={`Number ${i}`}
        draggable
        className='w-12 h-12 cursor-grab mb-4'
        onDragStart={(event)=>event.dataTransfer.setData(`text/plain`,String(i))}
        />
      );
    } return items;
  } 

  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-4">変数の学習</h1>
      { stepNumber === 2 && (
        <div className='mt-8 text-center'>
          <h2 className='text-xl mb-4'>{stepConfig.problem}</h2>
          <div className='flex justify-center flex-wrap'>{renderItem()}</div>
          <div className='w-48 h-48 border-2 flex justify-center items-center text-lg mt-4'
               onDrag={(event) => handleQuestion(event,parseInt(event.dataTransfer.getData(`text/plain`),10))}
               onDragOver={handleDragOver}>ドロップして答えを入力</div>
          {userAnswer !== null && (
            <div className='mt-4'>
              <h2 className='text-xl'>あなたの答えは:{userAnswer}</h2>
              {isCorrect !== null && (
                <h2 className={`text-xl ${isCorrect ? `text-green-500`:`text-red-500`}`}>
                  {isCorrect ? `正解です`:`不正解です`}
                </h2>
              )}
            </div>
          )}
        </div>
      )}
      <VariableImage />
      <div className="text-center mt-8">
        <h2 className="text-xl">カゴに入れたアイテムの数: {itemsInBasket}</h2>
      </div>
      <div>
        {stepNumber > 1 && (
          <a href={`/Variables/${stepNumber - 1}`}>前へ</a>
        )}
        </div>
        <div>
        {stepNumber < Object.keys(MaxSteps).length && (
          <a href={`/Variables/${stepNumber + 1}`}>次へ</a>
        )}
      </div>
    </div>
  );
};

export default StepPage;
