//Andreea - functie de preluare a datelor despre ratingul acordat filmelor din api

const fetchRatings = async (movies, id) => {
  const url = `https://moviesdatabase.p.rapidapi.com/titles/${id}/ratings`;
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
    const ratings = result.results;

    const movie = movies.find((movie) => movie.id === id);

    if (movie) {
      movie.ratings = ratings || {};
    }
  } catch (error) {
    console.error(error);
    return;
  }
};

export default fetchRatings;
