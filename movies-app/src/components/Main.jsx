import React from "react";
import { Search } from "./Search";

export const Main = ({ data }) => {
  return (
    <div className="main_container">
      <h2>Series</h2>
      <Search movies={data} />
    </div>
  );
};
