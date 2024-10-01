
import './List.css';

function List({ children, ...props }) {
  return (
    <ul {...props}>
      {children}
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