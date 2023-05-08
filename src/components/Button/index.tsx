import styled from 'styled-components'
import ButtonBase from './base'

const Button = styled(ButtonBase)`
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: ${({theme}) => theme.boxShadow.xlarge};
  color: ${({theme}) => theme.colors.buttonText};
  border: none;
  border-radius: ${({theme}) => theme.borderRadius.xlarge};
  padding: ${({theme}) => theme.spacings.medium}
    ${({theme}) => theme.spacings.large};

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
export default Button
