const getMoviesByRating = async () => {
  const url = "https://moviesminidatabase.p.rapidapi.com/movie/order/byRating/";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "bb3322f4admsh69c4f00f0db58e1p190911jsn649c13f44037",
      "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result.results;
  } catch (error) {
    console.error(error);
    return;
  }
};

export default getMoviesByRating;
