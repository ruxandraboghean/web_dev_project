import fetchActors from "./actors";
import addIntoCashe from "./addIntoCashe";
import fetchRatings from "./ratings";

const fetchSeries = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "bb3322f4admsh69c4f00f0db58e1p190911jsn649c13f44037",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const movies = result.titles;

    for (const movie of movies) {
      await fetchRatings(movies, movie.summary.id);
    }

    addIntoCashe("Movies", "http://localhost:3000", movies);

    return movies;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchSeries;
