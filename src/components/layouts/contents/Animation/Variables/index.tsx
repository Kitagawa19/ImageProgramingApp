import React,{ useState, useEffect }  from 'react';
import { useSpring, animated } from '@react-spring/web';

const storyTexts = [
  "アレックスは村を救うために魔法のクリスタルを探す旅に出ました。",
  "魔法のクリスタルを集めることで、村に平和をもたらすことができます。",
  "さあ、冒険の旅に出発しましょう！"
];

export const StoryAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, reset: true });

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < storyTexts.length - 1) {
        setIndex(index + 1);
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index, onComplete]);

  return (
    <div className="story-animation">
      <animated.div style={props}>
        <p>{storyTexts[index]}</p>
      </animated.div>
    </div>
  );
};