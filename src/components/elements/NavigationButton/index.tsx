import React from "react";
import Link from "next/link";

interface ButtonProps{
  label: string;
  href: string;
}

export const NavigationButton:React.FC<ButtonProps> = ({ label,href }) => {
  return(
    <div>
      <Link href={href}>
        <p className="text-blue-500 px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
        { label }
        </p>
      </Link>
    </div>
  )
}
