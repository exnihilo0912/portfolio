import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className='page page--grey'>
      <header className="page__header">
        <Link to={`pokemons`}>Back</Link>
        <div>Action</div>
      </header>
      <div className="page__content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
