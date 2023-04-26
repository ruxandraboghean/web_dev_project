const fetchActors = async (movies, id) => {
    const url = 'https://moviesdatabase.p.rapidapi.com/actors';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'bb3322f4admsh69c4f00f0db58e1p190911jsn649c13f44037',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const actors = result.results;

        const movie = movies.find(movie => movie.id === id);

        if(movie) {
            movie.actors = actors.forEach(actor => {
                const actorMovies = actor.knownForTitles.split(",");

                actorMovies.forEach(title => {
                  
                    if(title === movie.id) {
                        movie.actors = {...actor} || {};
                    }
                    return;
                })
            })
        }

        // return result.results;
    } catch (error) {
        console.error(error);
    }
}

export default fetchActors;