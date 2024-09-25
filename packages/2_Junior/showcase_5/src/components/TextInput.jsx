import styled from "styled-components";

const StyledLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.neutralSlate700}
`;
function Label({ children, ...props }) {
  return (
    <label {...props} >{children}</label>
  );
}

const StyledInputContainer = styled.div`
  display: flex;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.neutralSlate300};
  width: 100%;
  overflow: hidden;
`;
const StyledInputExtremity = styled.div`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.neutralSlate100};
  color:  ${({ theme }) => theme.colors.neutralSlate700};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.text.weight.bold};
`;
const StyledInput = styled.input`
  flex: 1;
  border: none;
  max-height: 100%;
  line-height: 2rem;
  outline: none;
  padding: 0 1rem;
  color:  ${({ theme }) => theme.colors.neutralSlate900};
  font-weight: ${({ theme }) => theme.font.text.weight.bold};
`;
function Input(props) {
  const { prefixText, suffixText, ...nativeProps } = props;
  return (
    <StyledInputContainer>
      {prefixText && (<StyledInputExtremity>{prefixText}</StyledInputExtremity>)}
      <StyledInput {...nativeProps} />
      {suffixText && (<StyledInputExtremity>{suffixText}</StyledInputExtremity>)}
    </StyledInputContainer>
  );
}

const StyledTextInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function TextInput(props) {
  const {
    id,
    label,
    name,
    onChange,
    value,
    prefixText,
    suffixText,
    ...styleProps
  } = props;

  return (
    <StyledTextInputGroup {...styleProps}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <Input
        id={id}
        name={id || name}
        onChange={onChange}
        value={value}
        prefixText={prefixText}
        suffixText={suffixText}
        {...styleProps}
      />
    </StyledTextInputGroup>
  );
}

export default TextInput;