import fetchActors from "./actors";
import addIntoCashe from "./addIntoCashe";
import fetchRatings from "./ratings";

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

      // if (movie.ratings.averageRating > 8.0) {
      //   movie.alert = "success";
      // } else if (movie.ratings.averageRating < 5.0) {
      //   movie.alert = "error";
      // }
    }

    addIntoCashe("Movies", "http://localhost:3000", movies);

    return movies;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchMovies;
