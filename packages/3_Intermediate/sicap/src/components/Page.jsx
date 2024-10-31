import styled from 'styled-components';

const StyledSection = styled.section`
  min-height: 100%;
  height: 150vh;
  padding: 1rem;
`;

export default function Page({ children }) {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  );
}