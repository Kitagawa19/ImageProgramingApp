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
  const defaultItemCounts: { [key: number]: number } = {
    2: 5,
    3: 8,
    4: 2,
    5: 10, 
  };
  const defaultItemCount = defaultItemCounts[stepNumber] || 0;

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
      {stepNumber === 1 && (
        <div className="mb-4 mt-4 text-center p-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-w-2xl mx-auto leading-relaxed">
          <p className="text-lg font-semibold">変数とは何ですか？</p>
          <p>変数は、情報を保存するための箱のようなものです。</p>
          <ul className="list-disc list-inside mt-2 text-left">
            <li>リンゴをカゴにドラッグして入れます。</li>
            <li>カゴに入ったリンゴの数が増えます。</li>
            <li>カゴの中のリンゴの数を確認しましょう。</li>
          </ul><br/>
          <p><strong>変数は、お買い物に行くときにカゴにものを入れてレジに出すのと同じです</strong></p>
          <p>レジでカゴを出せば、全部数えなくても中身がわかります。</p>
          <p>このように、変数を使うとデータを一括で管理できるので便利です。</p>
        </div>
      )}
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
                数字をドラッグしてね
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
      <VariableImage defaultItemCount = { defaultItemCount }/>
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