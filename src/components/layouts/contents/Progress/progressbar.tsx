import React from 'react';

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
      <div
        className="bg-blue-600 h-6 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
