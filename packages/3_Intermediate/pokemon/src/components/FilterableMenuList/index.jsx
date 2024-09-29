import './FilterableMenuList.css';

import { useState } from 'react';
import MenuList, { MenuListItem } from "../MenuList/Index";

export default function FilterableMenuList({ items, renderItem, onFilterItems }) {
  const [query, setQuery] = useState('');
  const handleFilterItems = onFilterItems
    ? onFilterItems
    : (query, item) => item.includes(query);
  const filteredItems = query
    ? items.filter(handleFilterItems.bind(this, query))
    : items;

  return (
    <div className='filterable-menu-list'>
      <header className='filterable-menu-list__header'>
        <input
          className='filterable-menu-list__search-input'
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>🔽</button>
      </header>
      <MenuList items={filteredItems} renderItem={renderItem} />
    </div>
  );
}

export { MenuListItem };