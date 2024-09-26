import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main className='page'>
      <header className="page__header">
        <a href="/pokemons">pokemons</a>
        &nbsp;
        <Link to={`pokemons`}>routed pokemons</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </main>
  );
}

export default App;
