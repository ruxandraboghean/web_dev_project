import React, { useEffect, useState } from "react";
import movie_default from "../images/movie_default.jpg";
import star from "../images/star.png";

export const Seria = ({ movie }) => {
  const [image, setImage] = useState("");
  const imgURL = movie.jawSummary.backgroundImage.url.replace(/,/g, "");
  const rating = movie.jawSummary.maturity.rating.maturityLevel;

  useEffect(() => {
    if (imgURL) {
      setImage(imgURL);
    } else {
      setImage(movie_default);
    }
    if (rating > 80) {
      movie.alert = "success";
    } else if (rating < 50) {
      movie.alert = "error";
    }
  });

  return (
    <div className="movie_container">
      <div className="movie_container_info">
        <img src={image} alt="movieImage" className="movie_image" />
        <div className="movie_info">
          <h2 className="movie_title">Title: {movie.jawSummary.title}</h2>
          <p className="movie_year">Year: {movie.jawSummary.releaseYear}</p>
          <p className="movie_synopsis">Year: {movie.jawSummary.synopsis}</p>

          <div className="movie_flex_item">
            <p className="movie_rating">Rating: {rating}</p>
            <img src={star} alt="votes" className="movie_icon" />
          </div>
        </div>
      </div>
      {movie.alert === "success" ? (
        <p className="movie_recommended">recommended</p>
      ) : (
        <p className="movie_not_recommended">not recommended</p>
      )}
    </div>
  );
};
