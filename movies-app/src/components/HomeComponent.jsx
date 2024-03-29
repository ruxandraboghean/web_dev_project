import React from "react";
import { Series } from "./Series/Series";
import { Movies } from "./Movies/Movies";

//Andreea - componenta Home care afiseaza atat filme, cat si seriale

export const HomeComponent = ({ series, movies }) => {
  return (
    <div className="home_container">
      <Series data={series} />
      <Movies data={movies} />
    </div>
  );
};
