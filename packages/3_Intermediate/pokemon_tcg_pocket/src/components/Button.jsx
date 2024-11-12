export default function Button({ name, type, children, ...props }) {
  return (
    <button
      className="button"
      name={name}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}