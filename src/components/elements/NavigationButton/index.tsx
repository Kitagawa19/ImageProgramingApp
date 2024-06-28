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
        <p className="bg-orange-500 text-white border-none rounded-full px-10 py-4 m-3 text-xl cursor-pointer hover:bg-orange-600">
        { label }
        </p>
      </Link>
    </div>
  )
}
