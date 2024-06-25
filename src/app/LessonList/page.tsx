import React from "react";
import { LessonList } from "@/components/layouts/contents/LessonList/index";
import { Header } from "@/components/layouts/Header";

const LessonListPage = () => {
  return (
    <div>
      <Header />
      <LessonList />
    </div>
  );
};

export default LessonListPage;