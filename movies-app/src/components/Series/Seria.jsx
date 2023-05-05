import React, { useEffect, useState } from "react";
import movie_default from "../../images/movie_default.jpg";
import star from "../../images/star.png";

export const Seria = ({ dataItem }) => {
  const [image, setImage] = useState("");
  const imgURL = dataItem.jawSummary.backgroundImage.url.replace(/,/g, "");
  const rating = dataItem.jawSummary.maturity.rating.maturityLevel;

  useEffect(() => {
    if (imgURL) {
      setImage(imgURL);
    } else {
      setImage(movie_default);
    }
    if (rating > 80) {
      dataItem.alert = "success";
    } else if (rating < 50) {
      dataItem.alert = "error";
    } else if(rating > 50 && rating < 80){
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
            <div className="movie_label">
              <p className="movie_rating">Rating: {rating}</p>
              <img src={star} alt="votes" className="movie_icon" />
            </div>

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
            <h2 className="movie_title">{dataItem.jawSummary.title}</h2>
            <p className="movie_year">
              Year: {dataItem.jawSummary.releaseYear}
            </p>
            <p className="movie_synopsis"> {dataItem.jawSummary.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
