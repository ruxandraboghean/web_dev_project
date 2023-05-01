import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Series } from "./pages/Series";
import { Movies } from "./pages/Movies";
import fetchSeries from "./data/series";

const cacheToFetch = {
  cacheName: "Movies",
  url: "http://localhost:3000",
};

function App() {
  const [movies, setMovies] = useState(null);

  const getSingleCacheData = async (cacheName, url) => {
    if (typeof caches === "undefined") return false;

    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    // If no cache exists
    if (!cachedResponse || !cachedResponse.ok) {
      setMovies(null);
      return;
    }

    return cachedResponse.json().then((item) => {
      setMovies(item);
    });
  };

  async function getMovies() {
    const result = await fetchSeries();

    setMovies(result);
  }

  useEffect(() => {
    getSingleCacheData(cacheToFetch.cacheName, cacheToFetch.url);

    if (movies === null) {
      getMovies();
    }
  }, []);

  console.log(movies, "movies");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home data={movies} />} />
          <Route path="/series" element={<Series data={movies} />} />
          {/* <Route path="/movies" element={<Movies data={movies} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
