import React from "react";
import Link from "next/link";

interface SendButtonProps{
  label: string;
  // link: string;
}

export const SeconedButton:React.FC<SendButtonProps> = ({ label  }) => {
  return (
    <div>
      <button className="bg-orange-500 text-white border-none rounded-full px-10 py-4 m-3 text-xl cursor-pointer hover:bg-orange-600">
        {label}
      </button>
    </div>
  );
}
export default SeconedButton;