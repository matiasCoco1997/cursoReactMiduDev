const API_KEY = "78155e53&";

export const searchMovies = async (search) => {
  if (search === "") return [];

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`
    );

    const json = await response.json();
    const movies = json.Search;

    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      img: movie.Poster,
    }));

    return mappedMovies;
  } catch (err) {
    throw new Error("Error searching movies, " + err.message);
  }
};
