import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main className='page'>
      <header>
        <a href="/pokemons">pokemons</a>
        &nbsp;
        <Link to={`pokemons`}>routed pokemons</Link>
      </header>
      <Outlet />
      <footer>footer</footer>
    </main>
  );
}

export default App;
