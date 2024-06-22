'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layouts/Header';

const MaxSteps: { [key: number]: StepConfig }  = {
  1: {
    title: '変数の学習',
    description: '変数とは何かを学びます。',
  },
  2: {
    title: '変数の使い方',
    description: '変数を使ってみましょう。',
  },
  3: {
    title: '変数の活用',
    description: '変数を活用してみましょう。',
  },
};

const StepPage = () => {
  const [itemsInBasket, setItemsInBasket] = useState<number>(0);
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


  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold text-center mt-4">変数の学習</h1>
      <div className="flex justify-around items-center mt-10">
        <div
          className="w-48 h-48 border-2 border-dashed flex justify-center items-center text-lg"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          カゴ
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/Animal/Cat.png"
            alt="Cat"
            draggable
            className="w-36 h-48 cursor-grab mb-4"
          />
        </div>
      </div>
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
