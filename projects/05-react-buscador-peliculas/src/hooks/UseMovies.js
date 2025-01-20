import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusSearch = useRef(search);

  const getMovies = useCallback(async () => {
    if (search === previusSearch.current) return;

    try {
      setLoading(true);
      const newMovies = await searchMovies(search);
      setMovies(newMovies);
      setError(null);
      previusSearch.current = search;
    } catch (err) {
      setError(err.message || "Error fetching movies");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, loading, error };
}
