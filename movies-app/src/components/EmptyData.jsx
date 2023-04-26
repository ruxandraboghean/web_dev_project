import React from 'react';
import movie from '../images/movie-reel.png';

export const EmptyData = () => {
  return (
    <>
        <div className='empty_container'>
            <img src={movie} alt='movie' />
            <p>movie not found...</p>
        </div>
    </>
  )
}
