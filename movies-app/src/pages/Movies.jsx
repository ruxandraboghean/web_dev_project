import React from "react";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

export const Movies = ({ movies }) => {
  return (
    <div className="main_content">
      <Aside />
      <Main data={movies} />
    </div>
  );
};
