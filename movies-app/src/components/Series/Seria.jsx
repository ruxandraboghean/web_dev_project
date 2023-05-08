import React, { useEffect, useState } from "react";
import movie_default from "../../images/movie_default.jpg";
import star from "../../images/star.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// Ruxandra - Afisarea unui serial

export const Seria = ({ dataItem }) => {
  const [image, setImage] = useState("");
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const imgURL = dataItem.jawSummary.backgroundImage.url.replace(/,/g, "");
  const rating = dataItem.jawSummary.maturity.rating.maturityLevel;
  const cast = dataItem.jawSummary.cast;
  const directors = dataItem.jawSummary.directors;
  const categories = dataItem.jawSummary.genres;

  const handleArrowClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

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
    } else if (rating > 50 && rating < 80) {
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
            <div className="movie_categories">
              {categories?.slice(0, 3).map((category) => {
                return (
                  <p className="movie_recommended" id={category.id}>
                    {category.name}
                  </p>
                );
              })}
            </div>
            <p className="movie_year">{dataItem.jawSummary.releaseYear}</p>
            {showMoreInfo ? (
              <div>
                <p className="movie_synopsis">
                  <span className="movie_span"> synopsis: </span>
                  {dataItem.jawSummary.synopsis}
                </p>
                <MdKeyboardArrowDown
                  onClick={handleArrowClick}
                  className="arrow_icon"
                />
              </div>
            ) : (
              <div className="movie_cast">
                <div className="movie_cast_container">
                  <span className="movie_span">Main actors:</span>
                  <div className="movie_cast_items">
                    {cast.slice(0, 3).map((actor) => {
                      return <p id={actor.id}> {actor.name}</p>;
                    })}
                  </div>
                  {directors.length !== 0 && (
                    <>
                      <span className="movie_span">Producers:</span>
                      <div className="movie_cast_items">
                        {directors?.slice(0, 3).map((producer) => {
                          return <p id={producer.id}> {producer.name}</p>;
                        })}
                      </div>
                    </>
                  )}
                </div>

                <MdKeyboardArrowUp
                  onClick={handleArrowClick}
                  className="arrow_icon"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
