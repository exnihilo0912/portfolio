import styled from "styled-components";

const StyledLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.neutralSlate700}
`;
function Label({ children, ...props }) {
  return (
    <label {...props} >{children}</label>
  );
}

export default StyledLabel;