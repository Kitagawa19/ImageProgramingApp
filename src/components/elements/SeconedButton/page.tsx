import React from "react";
import Link from "next/link";

interface SendButtonProps{
  label: string;
  link: string;
}

export const SendButton:React.FC<SendButtonProps> = ({ label ,link }) => {
  return (
    <Link href={link}>
      <button className="bg-orange-500 text-white border-none rounded-full px-10 py-8 m-3 text-5xl cursor-pointer hover:bg-orange-600">
        {label}
      </button>
    </Link>
  );
}
export default SendButton;