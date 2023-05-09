import {FC} from 'react'
import styled, {keyframes} from 'styled-components'
import {SpinnerProps} from './interfaces'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const SpinnerWrapper = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${({size}) => size || '30px'};
  height: ${({size}) => size || '30px'};
  border: ${({color}) => `4px solid ${color || '#fff'}`};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

const Spinner: FC<SpinnerProps> = ({size, color}) => (
  <SpinnerWrapper size={size} color={color} />
)

export default Spinner
