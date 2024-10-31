import styled from 'styled-components';

const StyledHeader = styled.header`
  background: lightgrey;
  height: 50px;
  padding: 1rem;
`;

export default function PageHeader() {
  return (
    <StyledHeader>
      <button>Action</button>
    </StyledHeader>
  );
}