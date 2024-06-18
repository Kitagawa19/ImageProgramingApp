import React from "react";
import Image from "next/image";
import { PrimaryButton } from "../../../elements/PrimaryButton/page";

export const Top:React.FC = () => {
  return(
    <div className="flex flex-col items-center justify-center h-screen space-4">
      <div className="absolute top-14 right-8 rotate-left">
        <Image src="/beginnermark.png"  width={200} height={200} alt="BegginerMark" priority={true} />
      </div>
      <PrimaryButton label="レッスン->" link="/LessonList" />
      <PrimaryButton label="つくる！->" link="/"/>
    </div>
  );
};
export default Top;