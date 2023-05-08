import setLocalStorage from "./setLocalStorage";
import fetchRatings from "./ratings";


//Andreea - functie de preluare a datelor despre filme din api 

const fetchMovies = async () => {
  const url = "https://moviesdatabase.p.rapidapi.com/titles";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "bb3322f4admsh69c4f00f0db58e1p190911jsn649c13f44037",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const movies = result.results;

    for (const movie of movies) {
      await fetchRatings(movies, movie.id);
    }

    setLocalStorage("movies", movies);

    return movies;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchMovies;
