import styled from 'styled-components'
import FormBase from './base'

const Form = styled(FormBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme}) => theme.spacings.medium};
`

export default Form
