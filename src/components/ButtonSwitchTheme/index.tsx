import styled, {keyframes} from 'styled-components'
import ButtonSwitchThemeBase from './base'

const appear = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const ButtonSwitchTheme = styled(ButtonSwitchThemeBase)`
  position: absolute;
  z-index: 10;
  left: 2.1rem;
  top: 2.2rem;
  background: ${({theme}) => theme.colors.background};
  border-radius: 1.8rem;
  border: unset;
  height: 6.3rem;
  width: 6.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  animation: ${appear} 0.4s ease-in-out forwards;
`
export default ButtonSwitchTheme
