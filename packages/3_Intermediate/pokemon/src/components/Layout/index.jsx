import { Outlet } from "react-router-dom";

import PageHeader from '../PageHeader';

import './Layout.css';

function Layout() {
  return (
    <div className='page'>
      <PageHeader />
      <div className="page__content">
        <Outlet />
      </div>
      <div id="modal"></div>
    </div>
  );
}

export default Layout;
