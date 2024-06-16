import React from "react";
import { PrimaryButton } from "../../../elements/PrimaryButton/page";

export const Top:React.FC = () => {
  return(
    <div className="flex flex-col items-center justify-center h-screen space-4">
      <PrimaryButton label="レッスン->" link="/LessonList" />
      <PrimaryButton label="つくる！->" link="/"/>
    </div>
  );
};
export default Top;