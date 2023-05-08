import React from "react";
import movie from "../images/movie-reel.png";

// Andreea - componenta afisata la inceputul cautarii unei productii

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
