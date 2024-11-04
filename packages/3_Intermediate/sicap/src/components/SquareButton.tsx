import React from 'react';
import styled from 'styled-components';

import Button from './Button.tsx';

const StyledButton = styled(Button)`
  border: none;
  background-color: transparent;
  border-radius: 5px;
  height: 35px;
  width: 35px;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export default function SquareButton({ children }) {
  return (<StyledButton>{children}</StyledButton>);
}