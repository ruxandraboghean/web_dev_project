import React, { useEffect, useState } from "react";
import movie_default from "../images/movie_default.jpg";

export const Movie = ({ movie }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (movie.primaryImage) {
      setImage(movie.primaryImage?.url);
    } else {
      setImage(movie_default);
    }
  });

  return (
    <div className="movie_container">
      <img src={image} alt="movieImage" className="movie_image" />
      <div className="movie_info">
        <h2 className="movie_title">{movie.titleText.text}</h2>
        <p className="movie_year">{movie.releaseYear.year}</p>
      </div>
    </div>
  );
};
