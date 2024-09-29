import './FilterableMenuList.css';

import { useState } from 'react';
import MenuList, { MenuListItem } from "../MenuList";
import SearchInput from '../SearchInput';

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
        <SearchInput value={query} onChange={(value) => setQuery(value)} placeholder="Search a pokemon" />
        <button>🔽</button>
      </header>
      <MenuList items={filteredItems} renderItem={renderItem} />
    </div>
  );
}

export { MenuListItem };