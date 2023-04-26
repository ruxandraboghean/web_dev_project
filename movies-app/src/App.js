import "./App.scss";
import { Search } from "./components/Search";
import React, { useEffect, useState } from "react";
import fetchMovies from "./data/movies";

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
    const result = await fetchMovies();

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
      <header className="App-header">
        <h2>Movies</h2>
        <Search movies={movies} />
      </header>
    </div>
  );
}

export default App;
