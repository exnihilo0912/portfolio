import React from 'react';

import './style.css';

// === PROPTYPES AND DEFAULT PROPS ===
type MenuProps = {
  items: string[]
};

// === COMPONENT ===
const Menu = ({ items }: MenuProps): JSX.Element => {
  return (
    <ul className="menu__list">
      {items.map(item => (
        <li className="menu__item" key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Menu;