import styled from 'styled-components';

import Button from '../components/Button.tsx';

const StyledHeader = styled.header`
  background: lightgrey;
  height: 50px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
const LogoPlaceholder = styled.div`
  height: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  align-items: center;
`;

export default function PageHeader() {
  return (
    <StyledHeader>
      <LogoPlaceholder>SICAP</LogoPlaceholder>
      <Button>Connexion</Button>
    </StyledHeader>
  );
}