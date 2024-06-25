'use client';
import React, { useState } from 'react';

export const VariableImage = () => {
  const [itemsInBasket,setItemsInBasket] = useState(0);
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setItemsInBasket(itemsInBasket + 1);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return(
    <div className='mt-4'>
      <div className='flex justify-around'>
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
    </div>
  )
}