export default function Tag({ children, fullWidth }) {
  return (
    <div
      className="tag"
      style={{ width: fullWidth ? '100%': 'auto' }}
    >
      {children}
    </div>
  );
}