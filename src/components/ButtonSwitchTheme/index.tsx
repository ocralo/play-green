import styled from 'styled-components'
import ButtonSwitchThemeBase from './base'

export const ButtonSwitchTheme = styled(ButtonSwitchThemeBase)`
  background: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.text};
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`
export default ButtonSwitchTheme
