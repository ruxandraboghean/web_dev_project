import React from 'react';
import movie from '../images/movie-reel.png';

export const EmptyData = ({ type }) => {
  return (
    <>
      <div className="empty_container">
        <img src={movie} alt="movie" />
        <p>{type} not found...</p>
      </div>
    </>
  );
};
