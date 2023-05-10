import styled from 'styled-components'

export const WrapperSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: ${({theme}) => theme.colors.background};
`

export default WrapperSpinner
