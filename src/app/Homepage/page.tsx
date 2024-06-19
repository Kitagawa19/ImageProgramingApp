import React, { FC } from "react";
import  SubHeader  from "../../components/layouts/SubHeader";
import { Top } from "../../components/layouts/contents/Top/page";

const HomePage:React.FC = () => {
  return (
    <div>
      <SubHeader />
      <Top />
    </div>
  );
};

export default HomePage;