import { Link } from 'react-router-dom';

import './MenuList.css';

function MenuList({ children }) {
  return (<ul className="menu-list">{children}</ul>);
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