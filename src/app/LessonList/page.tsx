import React, { FC } from "react";
import { LessonList } from "../../components/layouts/contents/LessonList";
import { Header } from "../../components/layouts/Header";

const LessonListPage:React.FC = () => {
  return (
    <div>
      <Header />
      <LessonList />
    </div>
  );
};

export default LessonListPage;