import './Tag.css';

export default function Tag({ children, ...props }) {
  return (
    <div className="tag" {...props}>{children}</div>
  );
}