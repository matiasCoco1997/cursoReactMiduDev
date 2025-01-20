import { useSearch } from "./hooks/UseSearch";
import { Movies } from "./components/Movies";
import "./app.css";
import { useState } from "react";

function App() {
  const { search, updateSearch, error } = useSearch("");
  const [inputValue, setInputValue] = useState("");
  const [sort, setSort] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSearch(inputValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form onSubmit={handleSubmit}>
            <input
              value={inputValue}
              onChange={handleChange}
              name="search"
              type="text"
              placeholder="Avengers, Star Wars... "
            />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type="submit">Buscar</button>
          </form>

          {error && <p className="error">{error}</p>}
        </header>

        <main>
          <Movies search={search} sort={sort}></Movies>
        </main>
      </div>
    </>
  );
}

export default App;
