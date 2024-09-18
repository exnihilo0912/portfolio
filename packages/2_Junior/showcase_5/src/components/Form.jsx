function Form({ children, title }) {
  return (
    <form>
      <h2>{title}</h2>
      {children}
    </form>
  );
}

export default Form;