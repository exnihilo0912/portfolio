import React from 'react'
import { ThemeProvider } from 'styled-components';

const palette = {
  primaryGreen: 'hsl(61, 70%, 52%)',
  primaryRed: 'hsl(4, 69%, 50%)',
  neutralWhite: 'hsl(0, 0%, 100%)',
  neutralSlate100: 'hsl(202, 86%, 94%)',
  neutralSlate300: 'hsl(203, 41%, 72%)',
  neutralSlate500: 'hsl(200, 26%, 54%)',
  neutralSlate700: 'hsl(200, 24%, 40%)',
  neutralSlate900: 'hsl(202, 55%, 16%)',
};

const font = {
  family: 'Plus Jakarta Sans, sans-serif',
  text: {
    size: { normal: '16px' },
    weight: {
      normal: '500',
      bold: '700',
    }
  },
}

const theme = {
  colors: palette,
  font: font,
};
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default Theme;
