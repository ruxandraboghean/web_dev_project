import React, { useEffect, useState } from "react";
import movie_default from "../../images/movie_default.jpg";
import star from "../../images/star.png";

export const Movie = ({ dataItem }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (dataItem.primaryImage) {
      setImage(dataItem.primaryImage?.url);
    } else {
      setImage(movie_default);
    }
    if (dataItem.ratings.averageRating > 8.0) {
      dataItem.alert = "success";
    } else if (dataItem.ratings.averageRating < 5.0) {
      dataItem.alert = "error";
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
              <p className="movie_rating">
                Rating: {dataItem.ratings?.numVotes}
              </p>
              <img src={star} alt="votes" className="movie_icon" />
            </div>

            {dataItem.alert === "success" ? (
              <p className="movie_recommended">recommended</p>
            ) : dataItem.alert === "error" ? (
              <p className="movie_not_recommended">not recommended</p>
            ) : (
              <p className="movie_medium">medium</p>
            )}
          </div>

          <div className="movie_info_background">
            <h2 className="movie_title">{dataItem.titleText.text}</h2>
            <p className="movie_year">Year: {dataItem.releaseYear.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
