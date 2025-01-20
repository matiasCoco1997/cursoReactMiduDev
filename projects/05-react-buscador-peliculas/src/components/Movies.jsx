import { ClipLoader } from "react-spinners";
import { useMovies } from "../hooks/UseMovies";
import { ListOfMovies } from "./ListOfMovies";
import { NoMoviesResult } from "./NoMoviesResult";

export function Movies({ search, sort }) {
  const { movies, error, loading } = useMovies({ search, sort });

  if (loading) {
    return (
      <div className="spinner-container">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (movies) {
    return <ListOfMovies movies={movies} />;
  } else {
    return <NoMoviesResult />;
  }
}
