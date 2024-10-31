import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: lightgrey;
  height: 100px;
  padding: 1rem;
`;

export default function PageFooter() {
  return (
    <StyledFooter>
      <p>footer</p>
    </StyledFooter>
  );
}