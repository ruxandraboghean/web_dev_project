import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import fetchSeries from "./data/series";
import fetchMovies from "./data/movies";
import getLocalStorage from "./data/getLocalStorage";

const cachesToFetch = [
  {
    cacheName: "Movies",
    url: "http://localhost:3000/movies",
  },
  {
    cacheName: "Series",
    url: "http://localhost:3000/series",
  },
];

const localStorageKeys = ["movies", "series"];

function App() {
  const [movies, setMovies] = useState(null);
  const [series, setSeries] = useState(null);

  //function to get series from the api
  async function getSeries() {
    const result = await fetchSeries();

    setSeries(result);
  }

  //function to get movies from the api
  async function getMovies() {
    const result = await fetchMovies();

    setMovies(result);
  }

  //hook to load once series data from cache or api
  useEffect(() => {
    localStorageKeys.map((key) => {
      const data = getLocalStorage(key);
      console.log(data, "data FROM LS");

      if (key === "movies") {
        setMovies(data);
      }
      if (key === "series") {
        setSeries(data);
      }
    });

    if (series === null) {
      getSeries();
    }

    if (movies === null) {
      getMovies();
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home series={series} movies={movies} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
