'use client';
import React, { useState } from 'react';

export const VariableImage:React.FC<{ defaultItemCount:number}> = ({ defaultItemCount }) => {
  const [itemsInBasket,setItemsInBasket] = useState(defaultItemCount);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setItemsInBasket(itemsInBasket + 1);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    setItemsInBasket(itemsInBasket - 1);
  };

  return(
    <div className='mt-4'>
      <div className='flex justify-around'>
        <div
          className="w-48 h-48 border-2 border-dashed flex justify-center items-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          <img
            src="/basket.png"
            className="w-full h-full"
            alt="Basket"
            draggable={false}
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/Fruits/apple.png"
            alt="Apple"
            draggable
            className="w-48 h-48 cursor-grab mb-4"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-xl">カゴに入れたアイテムの数: {itemsInBasket}</h2>
      </div>
    </div>
  )
}
