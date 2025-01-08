import responseMovies from "../mocks/with-results.json";
import responseNotFoundMovies from "../mocks/no-results.json";

export function useMovies() {
  const movies = responseMovies.Search;
  const errorMessage = responseNotFoundMovies.Response;
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    years: movie.Year,
    img: movie.Poster,
  }));

  if (mappedMovies.length > 0) {
    return { movies: mappedMovies };
  }
}
