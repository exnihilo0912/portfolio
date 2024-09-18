import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
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
    : '0.5rem 1rem'
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
`;

export default function Button({ children, ...props }) {
  const { type } = props;

  return (
    <ButtonContainer {...props}>
      {type === 'link' ? 'link' : children}
    </ButtonContainer>
  );
}