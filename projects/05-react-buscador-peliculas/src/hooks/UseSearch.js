import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstFlag = useRef(true);

  useEffect(() => {
    if (isFirstFlag.current) {
      isFirstFlag.current = search === "";
      return;
    }

    if (search === "") {
      setError("No es posible buscar una película vacia");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No es posible buscar una película con un número");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda debe contener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search: search, updateSearch, error };
}
