import './SearchInput.css';

export default function SearchInput({ id, placeholder, name, label, value, onChange }) {
  return (
    <div className='search-input-container'>
      <span>🔎</span>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        className='search-input-container__input'
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label className="search-input-container__label" htmlFor={id}>{label}</label>
    </div>
  );
}