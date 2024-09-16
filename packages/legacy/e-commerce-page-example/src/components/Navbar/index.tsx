import React from 'react';

import './style.css';

// === CONSTANTS AND UTILS ===
const items = [
  'Collections',
  'Men',
  'Women',
  'About',
  'Contact',
];

// === COMPONENT ===
const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar desktop-only">
      <ul className="navbar__list">
        {
          items.map(item => (
            <li
              className="navbar__item"
              key={item}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;