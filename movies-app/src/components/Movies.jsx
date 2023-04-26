import React from "react";
import { Movie } from "./Movie";

export const Movies = ({movies}) => {

  return (
    <>
      <div className="movies_container">
        {movies?.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
};
