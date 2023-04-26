import React, { useEffect, useState } from "react";
import movie_default from "../images/movie_default.jpg";
import star from "../images/star.png";
import heart from "../images/heart-rate.png";

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
        <h2 className="movie_title">Title: {movie.titleText.text}</h2>
        <p className="movie_year">Year: {movie.releaseYear.year}</p>
        <div className="movie_flex_item">
          <p className="movie_rating">Rating: {movie.ratings.averageRating}</p>
          <img src={star} alt="votes" className="movie_icon" />
        </div>
        <div className="movie_flex_item">
          <p className="movie_votes">Votes: {movie.ratings.numVotes}</p>
          <img src={heart} alt="votes" className="movie_icon" />
        </div>
        <p className="movie_votes">Info:</p>
      </div>
    </div>
  );
};
