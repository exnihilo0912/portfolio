import React from 'react';
import './List.css';

function List({ children, items, renderItem, ...props }) {
  return (
    <ul {...props}>
      {
        items
          ? renderItem
            ? items.map((item, index) => (
              renderItem(item, index)
            ))
            : items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))
          : children
      }
    </ul>
  );
}

function ListItem({ children, ...props }) {
  return (
    <li {...props}>{children}</li>
  );
}

export default List;
export {
  List,
  ListItem,
};