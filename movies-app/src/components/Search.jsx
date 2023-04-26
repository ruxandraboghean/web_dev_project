import React, { useEffect, useState } from "react";
import * as IoIcons from "react-icons/io";
import { Movies } from "./Movies";
import { EmptyData } from "./EmptyData";
import getMoviesByRating from "../data/moviesOrderByRatings";

export const Search = ({ movies }) => {
  const [searchedTitle, setSearchedTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterData = () => {
    const newData = movies.filter((item) => {
      return item.titleText.text
        .toLowerCase()
        .includes(searchedTitle.toLowerCase());
    });
    setFilteredMovies(newData);
  };

  return (
    <>
      <div className="search_container">
        <label htmlFor="movie">
          <IoIcons.IoMdSearch className="search_icon" />
        </label>
        <input
          type="text"
          placeholder="search movie"
          onChange={(e) => setSearchedTitle(e.target.value)}
          value={searchedTitle}
          className="search_input"
          id="movie"
          onKeyDown={handleFilterData}
        />
      </div>
      {filteredMovies?.length ? (
        <Movies movies={filteredMovies} />
      ) : (
        <EmptyData />
      )}
    </>
  );
};
