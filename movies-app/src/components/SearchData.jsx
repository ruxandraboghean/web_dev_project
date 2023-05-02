import React from "react";
import movie from "../images/movie-reel.png";

export const SearchData = ({ data }) => {
  return (
    <>
      <div className="empty_container">
        <img src={movie} alt="movie" />
        <p>search for a {data}...</p>
      </div>
    </>
  );
};
