import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const isRootPage = window.location.href.replace(/https?:\/\//, '').split('/').length <= 2;
  return (
    <div className='page page--grey'>
      <header className="page__header">
        {!isRootPage && (<button onClick={() => navigate(-1)}>⬅</button>)}
        <div>Action</div>
      </header>
      <div className="page__content">
        <Outlet />
      </div>
      <div id="modal"></div>
    </div>
  );
}

export default Layout;
