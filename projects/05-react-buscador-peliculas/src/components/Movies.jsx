import { useMovies } from "../hooks/UseMovies";

function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Year: {movie.year}</p>
          <img src={movie.img} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResult() {
  return <h3>No results</h3>;
}

export function Movies() {
  const { movies } = useMovies();
  const hasMovies = movies.length > 0;

  return hasMovies ? (
    <ListOfMovies movies={movies}></ListOfMovies>
  ) : (
    <NoMoviesResult></NoMoviesResult>
  );
}
