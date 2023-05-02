import React from "react";
import movie from "../images/movie-reel.png";

export const SearchData = ({ type }) => {
  return (
    <>
      <div className="empty_container">
        <img src={movie} alt="movie" />
        <p>search for a {type}...</p>
      </div>
    </>
  );
};
