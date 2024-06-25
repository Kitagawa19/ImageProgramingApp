import React from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/elements/PrimaryButton";

export const Top = () => {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen space-4">
      <div className="absolute top-14 right-8 rotate-left">
        <Image src="/beginnermark.png"  width={200} height={200} alt="BegginerMark" priority={true} />
      </div>
      <div className="flex space-4">
        <Image src="/Animal/Cat.png" width={200} height={200} alt="Cat" priority={true}  />
        <Image src="/Animal/Cat.png" width={200} height={200} alt="Chick" priority={true} />
      </div>
      <div className="mt-8">
        <PrimaryButton label="レッスン->" link="/LessonList" />
        <PrimaryButton label="つくる！->" link="/"/>
      </div>
    </div>
  )
}