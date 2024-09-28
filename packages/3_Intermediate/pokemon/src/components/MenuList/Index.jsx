import { Link } from 'react-router-dom';

import './MenuList.css';

function MenuList({ children, items, renderItem }) {
  return (
    <ul className="menu-list">
      {
        items
        ? items.map((item) => renderItem(item))
        : children
      }
    </ul>
  );
}

function MenuListItem({ children, to, size = 'medium' }) {
  const classes = [
    'menu-list__item',
    ...size === 'small'
      ? ['menu-list__item--small']
      : ['']
  ].join(' ');

  return (
      <li className={classes}>
        <Link to={to}>
          {children}
        </Link>
      </li>
  );
}

export default MenuList;
export {
  MenuList,
  MenuListItem,
}