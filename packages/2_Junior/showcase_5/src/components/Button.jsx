import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  height: ${({ theme, type }) => (
    type === 'link'
      ? 'auto'
      : '3rem'
  )};;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme, type }) => (
    type === 'link'
      ? "transparent"
      : theme.colors.primaryGreen
  )};
  color: ${({ theme, type }) => (
    type === 'link'
      ? theme.colors.neutralSlate700
      : theme.colors.neutralSlate900
  )};
  border-radius: 45px;
  padding: ${({ type }) => (
    type === 'link'
    ? '0'
    : '1rem 2rem'
  )};
  font-weight: ${({ theme, type }) => (
    type === 'link'
    ? theme.font.text.weight.normal
    : theme.font.text.weight.bold
  )};
  text-decoration: ${({ theme, type }) => (
    type === 'link'
      ? `${theme.colors.neutralSlate700} underline`
      : ''
  )};
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
`;

export default function Button({ children, ...props }) {
  const { type } = props;

  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  );
}