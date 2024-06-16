import React, { FC } from "react";
import { Header } from "../../components/layouts/Header";
import { Top } from "../../components/layouts/contents/Top/page";

const HomePage:React.FC = () => {
  return (
    <div>
      <Header />
      <Top />
    </div>
  );
};

export default HomePage;