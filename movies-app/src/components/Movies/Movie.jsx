import React, { useEffect, useState } from "react";
import movie_default from "../../images/movie_default.jpg";
import star from "../../images/star.png";

// Andreea - afisarea film

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
    } else if (
      dataItem.ratings.averageRating > 5.0 &&
      dataItem.ratings.averageRating < 8.0
    ) {
      dataItem.alert = "average";
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
            {dataItem.ratings.numVotes && (
              <div className="movie_label">
                <p className="movie_rating">
                  Rating: {dataItem.ratings?.numVotes}
                </p>
                <img src={star} alt="votes" className="movie_icon" />
              </div>
            )}

            {dataItem.alert === "success" ? (
              <p className="movie_recommended">recommended</p>
            ) : dataItem.alert === "error" ? (
              <p className="movie_not_recommended">not recommended</p>
            ) : dataItem.alert === "average" ? (
              <p className="movie_average">average</p>
            ) : (
              <p></p>
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
