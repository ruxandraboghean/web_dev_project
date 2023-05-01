import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import { Series } from "./Series";
import { EmptyData } from "./EmptyData";
import { SearchData } from "./SearchData";

export const Search = ({ movies }) => {
  const [searchedTitle, setSearchedTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterData = () => {
    const newData = movies.filter((item) => {
      return item.jawSummary.title
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
          placeholder="search seria"
          onChange={(e) => setSearchedTitle(e.target.value)}
          value={searchedTitle}
          className="search_input"
          id="movie"
          onKeyDown={handleFilterData}
        />
      </div>
      {searchedTitle === "" ? (
        <SearchData data="seria" />
      ) : filteredMovies?.length ? (
        <Series movies={filteredMovies} />
      ) : (
        <EmptyData />
      )}
    </>
  );
};
