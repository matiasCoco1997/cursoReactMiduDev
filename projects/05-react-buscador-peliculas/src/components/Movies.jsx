import { ClipLoader } from "react-spinners";
import { useMovies } from "../hooks/UseMovies";
import { ListOfMovies } from "./ListOfMovies";
import { NoMoviesResult } from "./NoMoviesResult";

export function Movies({ search }) {
  const { movies, error, loading } = useMovies({ search });

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
  }

  return <NoMoviesResult />;
}
