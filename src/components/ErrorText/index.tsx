import styled from 'styled-components'
import ErrorTextBase from './base'

export const ErrorText = styled(ErrorTextBase)`
  color: ${({theme}) => theme.colors.buttonText};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-family: ${({theme}) => theme.fontFamily.primary};
  font-weight: ${({theme}) => theme.fontWeights.medium};
  border: 1px solid ${({theme}) => theme.colors.error};
  border-radius: ${({theme}) => theme.borderRadius.small};
  padding: ${({theme}) => theme.spacings.small};
  background-color: ${({theme}) => theme.colors.error};
  position: absolute;
  top: 1rem;
  left: 1rem;
`

export default ErrorText
