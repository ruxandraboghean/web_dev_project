import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import fetchSeries from "./data/series";
import fetchMovies from "./data/movies";

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

function App() {
  const [movies, setMovies] = useState(null);
  const [series, setSeries] = useState(null);

  //function to get data saved in cache memory
  const getSingleCacheData = async (cacheName, url) => {
    if (typeof caches === "undefined") return false;

    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    // If no cache exists
    if (!cachedResponse || !cachedResponse.ok) {
      cacheName === "Series" ? setSeries(null) : setMovies(null);
      return;
    }

    return cachedResponse.json().then((item) => {
      cacheName === "Series" ? setSeries(item) : setMovies(item);
    });
  };

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
    cachesToFetch.map((cacheToFetch) =>
      getSingleCacheData(cacheToFetch.cacheName, cacheToFetch.url)
    );

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
          <Route
            path="/"
            element={
              <Home
                series={series}
                movies={movies}
                // currentMenuItem={currentMenuItem}
              />
            }
          />
          {/* <Route path="/series" element={<Series data={series} />} />
          <Route path="/movies" element={<Movies data={movies} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
