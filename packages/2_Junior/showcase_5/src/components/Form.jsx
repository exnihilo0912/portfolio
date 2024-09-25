import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;

  & h2 {
    color: ${({ theme }) => theme.colors.neutralSlate900};
  }
`;

function Form({ children, title, onSubmit, ...styleProps }) {
  return (
    <form onSubmit={onSubmit} {...styleProps}>
      <h2>{title}</h2>
      {children}
    </form>
  );
}

export default StyledForm;