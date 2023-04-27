import React from "react";
import { Seria } from "./Seria";

export const Series = ({ movies }) => {
  return (
    <>
      <div className="movies_container">
        {movies?.map((movie) => {
          return <Seria movie={movie} key={movie.summary.id} />;
        })}
      </div>
    </>
  );
};
