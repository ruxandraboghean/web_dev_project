import React, { useState } from "react";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { HomeComponent } from "../components/HomeComponent";

export const Home = ({ series, movies }) => {
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  return (
    <div className="main_content">
      <Aside setCurrentMenuItem={setCurrentMenuItem} />
      {currentMenuItem === "movies" ? (
        <Main data={movies} currentMenuItem={currentMenuItem} />
      ) : currentMenuItem === "series" ? (
        <Main data={series} currentMenuItem={currentMenuItem} />
      ) : (
        <HomeComponent series={series} movies={movies} />
      )}
    </div>
  );
};
