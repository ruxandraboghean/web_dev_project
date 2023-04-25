import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";

const url = "https://moviesdatabase.p.rapidapi.com/titles";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "bb3322f4admsh69c4f00f0db58e1p190911jsn649c13f44037",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();

      //rezultatul este parsat din format JSON in Object
      const parsedResult = JSON.parse(result);

      setMovies(parsedResult.results);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies, "@movies");

  return (
    <>
      <h2>Movies</h2>

      <div className="movies_container">
        {movies?.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
};
