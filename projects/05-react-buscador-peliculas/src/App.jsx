import { Movies } from "./components/Movies";

function App() {
  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form action="">
            <input type="text" placeholder="Avengers, Star Wars... " />
            <button type="submit">Buscar</button>
          </form>
        </header>

        <main>
          <Movies></Movies>
        </main>
      </div>
    </>
  );
}

export default App;
