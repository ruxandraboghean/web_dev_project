import React from "react";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export const Home = ({ data }) => {
  return (
    <div className="main_content">
      <Aside />
      <Main data={data} />
    </div>
  );
};
