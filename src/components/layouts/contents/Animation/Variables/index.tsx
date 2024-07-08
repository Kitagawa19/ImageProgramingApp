import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';

type StoryItem = {
  type: 'narration' | 'dialogue';
  text: string;
  speaker?: 'alex' | 'villager' | 'wizard';
  role?: 'アレックス' | '村人' | '魔法使い';
};

const storyItems: StoryItem[] = [
  { type: 'narration', text: "昔々、平和な王国がありました。" },
  { type: 'narration', text: "しかし、ある日邪悪なドラゴンが現れ、王国の魔法のクリスタルを奪ってしまいました。" },
  { type: 'dialogue', speaker: 'villager', text: "大変です！魔法のクリスタルが奪われてしまいました！",role:"村人" },
  { type: 'dialogue', speaker: 'alex', text: "私が取り戻してみせます。王国の平和のために！",role:"アレックス" },
  { type: 'dialogue', speaker: 'wizard', text: "アレックス、気をつけるのだ。ドラゴンは強力な謎と問題を仕掛けてくるぞ。" ,role:"魔法使い"},
  { type: 'narration', text: "こうしてアレックスは、魔法のクリスタルを取り戻す冒険の旅に出ることになりました。" },
];

const characterImages = {
  alex: '/Character/alex.png',
  villager: '/Character/villager.png',
  wizard: '/Character/wizard.png',
};

export const StoryAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, reset: true });

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        if (index < storyItems.length - 1) {
          setIndex(index + 1);
        } else {
          onComplete();
        }
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [index, onComplete, isFirstRender]);

  const currentItem = storyItems[index];

  return (
    <div className="story-animation w-full min-h-screen flex items-center justify-center bg-gray-100">
      <animated.div style={props} className="w-full max-w-4xl">
        {currentItem.type === 'narration' ? (
          <p className="text-2xl text-center my-8 px-4 bg-white rounded-lg shadow-md">{currentItem.text}</p>
        ) : (
          <div className="flex flex-col items-center my-8">
            {currentItem.speaker && (
              <div className="w-[500px] h-[500px] relative mb-4">
              <Image
                src={characterImages[currentItem.speaker]}
                alt={`${currentItem.speaker} character`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            )}
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
              <p className='text-xl'>{currentItem.role}</p>
              <p className="text-3xl">{currentItem.text}</p>
            </div>
          </div>
        )}
      </animated.div>
    </div>
  );
};
