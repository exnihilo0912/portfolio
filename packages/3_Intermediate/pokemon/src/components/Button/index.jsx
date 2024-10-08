import './index.css';

export default function Button({ children, type, onClick }) {
  return (
    <button className='button' type={type} onClick={onClick}>{children}</button>
  );
}