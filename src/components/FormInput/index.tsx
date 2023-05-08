import styled from 'styled-components'
import FormInputBase from './base'

export const FormInput = styled(FormInputBase)`
  display: inherit;
  position: relative;
  margin-bottom: 1.5rem;
  height: 6.7rem;
  max-width: 33rem;
  width: 100%;

  input {
    width: 100%;
    padding: ${({theme}) => theme.spacings.xlarge}
      ${({theme}) => theme.spacings.medium} ${({theme}) => theme.spacings.small};
    border: 1px solid rgb(0 0 0 / 6%);
    border-radius: ${({theme}) => theme.borderRadius.large};
    background: ${({theme}) => theme.colors.backgroundInput};
    color: ${({theme}) => theme.colors.textInput};
    font-size: 1.6rem;
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-weight: 400;
    line-height: 1.5;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      outline: none;
      border-color: ${({theme}) => theme.colors.primary};
      box-shadow: 0 0 0 0.01rem ${({theme}) => theme.colors.primary};
    }
  }

  label {
    position: absolute;
    top: 1.2rem;
    left: 1.6rem;
    color: ${({theme}) => theme.colors.textInput};
    font-size: ${({theme}) => theme.fontSizes.small};
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-weight: 700;
    opacity: 0.6;
    line-height: 1.5;
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 0;
    left: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.textInputFocus};
  }

  input:focus + label {
    color: ${({theme}) => theme.colors.textInputFocus};
    display: disabled;
  }

  input:disabled {
    background: ${({theme}) => theme.colors.backgroundInputDisabled};
    color: ${({theme}) => theme.colors.textInputDisabled};
    border-color: ${({theme}) => theme.colors.borderInputDisabled};
  }

  input:disabled + label {
    color: ${({theme}) => theme.colors.textInputDisabled};
  }

  input:disabled:focus {
    border-color: ${({theme}) => theme.colors.borderInputDisabled};
    box-shadow: 0 0 0 0.01rem ${({theme}) => theme.colors.borderInputDisabled};
  }

  input:disabled:focus + label {
    color: ${({theme}) => theme.colors.textInputDisabled};
  }

  .error-text {
    position: absolute;
    top: 100%;
    left: 0;
    color: ${({theme}) => theme.colors.textError};
    font-size: 1.2rem;
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-weight: 400;
    line-height: 1.5;
    transition: all 0.2s ease-in-out;
  }
`
export default FormInput
