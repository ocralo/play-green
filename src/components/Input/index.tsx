import styled from 'styled-components'

const Input = styled.input`
  background: ${({theme}) => theme.colors.backgroundInput};
  color: ${({theme}) => theme.colors.textInput};
  border: none;
  border-radius: ${({theme}) => theme.borderRadius.small};
  padding: 0.5rem;
`
export default Input
