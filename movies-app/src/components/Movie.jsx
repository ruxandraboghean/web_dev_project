import React, { useEffect, useState } from "react";
import movie_default from "../images/movie_default.jpg";
import star from "../images/star.png";
import heart from "../images/heart-rate.png";

const styles = {
  // backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export const Movie = ({ movie }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (movie.primaryImage) {
      setImage(movie.primaryImage?.url);
    } else {
      setImage(movie_default);
    }
    if (movie.ratings.averageRating > 8.0) {
      movie.alert = "success";
    } else if (movie.ratings.averageRating < 5.0) {
      movie.alert = "error";
    }
  });

  return (
    <div
      className="movie_container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="movie_container_info">
        <img src={image} alt="movieImage" className="movie_image" />
        <div className="movie_info">
          <h2 className="movie_title">Title: {movie.titleText.text}</h2>
          <p className="movie_year">Year: {movie.releaseYear.year}</p>
          {movie.alert === "success" ? (
            <p className="movie_recommended">recommended</p>
          ) : (
            <p className="movie_not_recommended">not recommended</p>
          )}
          <div className="movie_flex_item">
            <p className="movie_rating">
              Rating: {movie.ratings.averageRating}
            </p>
          </div>
          <img src={star} alt="votes" className="movie_icon" />

          <div className="movie_flex_item">
            <p className="movie_votes">Votes: {movie.ratings.numVotes}</p>
            <img src={heart} alt="votes" className="movie_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
