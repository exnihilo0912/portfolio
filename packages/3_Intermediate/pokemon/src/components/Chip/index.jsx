import './Chip.css';

export default function Chip({ children, background }) {
  return (
    <div className="chip" style={{ backgroundColor: background }}>{children}</div>
  );
}