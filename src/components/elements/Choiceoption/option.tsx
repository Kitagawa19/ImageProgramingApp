import React from "react";
interface ChoiceOptionProps {
    text: string;
}

export const ChoiceOption: React.FC<ChoiceOptionProps> = ({ text }) => {
    return (
      <div
        onDragStart={(event) => event.dataTransfer.setData('text/plain', text)}
        className="w-24 h-12 bg-gray-200 rounded flex justify-center items-center cursor-grab mb-2"
      >
        {text}
      </div>
    );
  };