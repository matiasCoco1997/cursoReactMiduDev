export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <h3>{movie.title}</h3>
          <p>Year: {movie.year}</p>
          <img src={movie.img} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}
