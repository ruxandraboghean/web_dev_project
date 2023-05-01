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
    } else {
      movie.alert = "medium"
    }
  });

  return (
    <div
      className="movie_container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="movie_container_info">
        <div className="movie_info">
          <div className="movie_flex_item">
            <div className="movie_label">
              <p className="movie_rating">Rating: {rating}</p>
              <img src={star} alt="votes" className="movie_icon" />
            </div>

            {movie.alert === "success" ? (
              <p className="movie_recommended">recommended</p>
            ) : movie.alert === "error" ? (
              <p className="movie_not_recommended">not recommended</p>
            ) : (
              <p className="movie_medium">medium</p>
            )}
          </div>

          <div className="movie_info_background">
            <h2 className="movie_title">{movie.jawSummary.title}</h2>
            <p className="movie_year">Year: {movie.jawSummary.releaseYear}</p>
            <p className="movie_synopsis"> {movie.jawSummary.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
