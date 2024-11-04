import React from 'react';
import styled from 'styled-components';

type ButtonType = 'submit' | 'button' | 'reset';
interface ButtonProps {
  children: JSX.Element;
  type?: ButtonType;
  name?: string;
  disabled?: boolean;
}

const StyledButton = styled.button`
  max-width: 100%;
`;

export default function Button(buttonProps: ButtonProps) {
  const {
    children,
    disabled = false,
    name,
    type = 'button',
    ...props
  } = buttonProps;

  return (
    <StyledButton
      type={type}
      name={name}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
}