'use client';
import React, { useState } from 'react';
import { StoryAnimation } from '@/components/layouts/contents/Animation/Variables';
import { Map } from '@/components/layouts/contents/Map';

const HomePage = () => {
  const [showMap, setShowMap] = useState(false);

  const handleAnimationComplete = () => {
    setShowMap(true);
  };

  return (
    <div className="homepage">
      {!showMap ? (
        <StoryAnimation onComplete={handleAnimationComplete} />
      ) : (
        <Map />
      )}
    </div>
  );
};

export default HomePage;
