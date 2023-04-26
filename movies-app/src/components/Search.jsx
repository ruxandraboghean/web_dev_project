import React, { useEffect, useState } from "react";
import * as IoIcons from "react-icons/io";
import { Movies } from "./Movies";
import fetchMovies from "../data/movies";
import { EmptyData } from "./EmptyData";

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
      {filteredMovies ? <Movies movies={filteredMovies} /> : <EmptyData />}

      {/* <AlertUser movie={movie} /> */}
    </>
  );
};
