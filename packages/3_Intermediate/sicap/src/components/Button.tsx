import React from 'react';

type ButtonType = 'submit' | 'button' | 'reset';
interface ButtonProps {
  children: JSX.Element;
  type: ButtonType;
  name: string;
  disabled: boolean;
}
export default function Button({ children, type, name, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      name={name}
      disabled={disabled}
    >
      {children}
    </button>
  );
}