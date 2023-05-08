import React from "react";
import { SearchSeria } from "./Series/SearchSeria";
import { SearchMovie } from "./Movies/SearchMovie";

//Ruxandra - componenta principala care transmite date despre meniul selectat spre realizare cautare

export const Main = ({ data, currentMenuItem }) => {
  console.log(typeof currentMenuItem, "currentMenuItem");
  return (
    <div className="main_container">
      <h2>
        {currentMenuItem.charAt(0).toUpperCase() + currentMenuItem.slice(1)}
      </h2>
      {currentMenuItem === "series" ? (
        <SearchSeria data={data} type="seria" />
      ) : (
        <SearchMovie data={data} type="movie" />
      )}
    </div>
  );
};
