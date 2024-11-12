export default function SwitchInput({ name, label, onClick }) {
  return (
    <label>
      {label}
      &nbsp;
      <input
        name={name}
        type='checkbox'
        onClick={onClick}
      />
    </label>
  );
}