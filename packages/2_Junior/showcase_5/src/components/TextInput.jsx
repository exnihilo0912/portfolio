import styled from "styled-components";

const StyledTextInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Label({ children, ...props }) {
  return (
    <label {...props} >{children}</label>
  );
}
const StyledLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.neutralSlate700}
`;

const StyledInputContainer = styled.div`
  display: flex;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.neutralSlate300};
  width: fit-content;
`;
const StyledInput = styled.input`
  border: none;
  max-height: 100%;
  line-height: 100%;
  outline: none;
  padding-left: 0.5rem;
`;
const StyledInputPrefix = styled.div`
  width: 2rem;
  background: ${({ theme }) => theme.colors.neutralSlate100};
  color:  ${({ theme }) => theme.colors.neutralSlate300};
`;
const StyledInputSuffix = styled.div`
  width: 2rem;
  background: ${({ theme }) => theme.colors.neutralSlate100};
  color:  ${({ theme }) => theme.colors.neutralSlate900};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.text.weight.bold};
`;
function Input(props) {
  const { prefixText, suffixText, ...nativeProps } = props;
  return (
    <StyledInputContainer>
      {prefixText && (<StyledInputPrefix>{prefixText}</StyledInputPrefix>)}
      <StyledInput {...nativeProps} />
      {suffixText && (<StyledInputSuffix>{suffixText}</StyledInputSuffix>)}
    </StyledInputContainer>
  );
}

function TextInput(props) {
  const { label } = props;
  return (
    <StyledTextInputGroup {...props}>
      <StyledLabel>{label}</StyledLabel>
      <Input {...props} />
    </StyledTextInputGroup>
  );
}

export default TextInput;