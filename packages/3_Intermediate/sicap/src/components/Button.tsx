import React from 'react';
import styled from 'styled-components';

type ButtonType = 'submit' | 'button' | 'reset';
interface ButtonProps {
  children: JSX.Element;
  type: ButtonType;
  name: string;
  disabled: boolean;
}

const StyledButton = styled.button`
  width: 100%;
`;

export default function Button({ children, type, name, disabled }: ButtonProps) {
  return (
    <StyledButton
      type={type}
      name={name}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}