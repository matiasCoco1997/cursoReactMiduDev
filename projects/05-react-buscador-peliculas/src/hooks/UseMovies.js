import { useEffect, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);
  const safeSearch = search || "";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const newMovies = await searchMovies(safeSearch);
        setMovies(newMovies);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };

    getMovies();
  }, [safeSearch]);

  return { movies, loading, error };
}
