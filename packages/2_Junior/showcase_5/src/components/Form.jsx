import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Form({ children, title, ...styleProps }) {
  return (
    <form {...styleProps}>
      <h2>{title}</h2>
      {children}
    </form>
  );
}

export default StyledForm;