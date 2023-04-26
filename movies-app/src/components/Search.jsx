import React, { useEffect, useState } from "react";
import * as IoIcons from "react-icons/io";
import { Movies } from "./Movies";
import fetchMovies from "../data/movies";
import { EmptyData } from "./EmptyData";
import fetchActors from "../data/actors";

export const Search = () => {
  const [searchedTitle, setSearchedTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const filteredMovies = movies.filter(movie =>
    movie.titleText.text.toLowerCase().includes(searchedTitle.toLowerCase())
  );

  useEffect(() => {
    async function getMovies() {
      const result = await fetchMovies();
      setMovies(result);
    }

    getMovies();

  }, []);
  console.log(movies, "@MOVIES");

  return (
    <>
    <div className="search_container">
      <label htmlFor="movie">
        <IoIcons.IoMdSearch className="search_icon"/>
      </label>
      <input
        type="text"
        placeholder="search movie"
        onChange={(e) => setSearchedTitle(e.target.value)}
        value={searchedTitle}
        className="search_input"
        id="movie"
      />
    </div>
      {filteredMovies.length !== 0 ? <Movies movies={filteredMovies}/> : <EmptyData />}
    </>

  );
};
