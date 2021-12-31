import React from 'react';

import Logo from 'components/Logo';
import Menu from 'components/Menu';
import Navbar from 'components/Navbar';

import './style.css'

// === CONSTANTS AND UTILS ===
const menuItems = ['A', 'B'];

// === COMPONENT ===
const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="flex flex--align-center gap--1">
        <button className="btn btn--ghost btn--secondary btn--icon mobile-only">
          <img src="/assets/images/icon-menu.svg" alt="burger icon" />
        </button>
        <Logo />
      </div>
      <Navbar />
      <Menu items={menuItems} />
    </header>
  );
};

export default Header;