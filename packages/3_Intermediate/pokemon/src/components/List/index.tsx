import React from 'react';
import './List.css';

interface ListProps {
  children?: React.ReactNode;
  items?: Array<any>;
  renderItem?: Function;
}

function List({ children, items, renderItem, ...props }: ListProps) {
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

interface ListItemProps {
  children: React.ReactNode;
}

function ListItem({ children, ...props }: ListItemProps) {
  return (
    <li {...props}>{children}</li>
  );
}

export default List;
export {
  List,
  ListItem,
};