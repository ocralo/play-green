import styled, {keyframes} from 'styled-components'
import CardIListImageBase from './base'

const slideInAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const CardListImage = styled(CardIListImageBase)`
  display: grid;
  grid-template-columns: 4fr 6.8rem;
  grid-template-rows: 1fr;
  height: 7.7rem;
  margin: 0 2.2rem;
  border-radius: 1.2rem;
  background: ${({theme}) => theme.colors.backgroundCardList};
  animation: ${slideInAnimation} 0.5s ease-in-out;

  .container-lef {
    height: 100%;
    width: 100%;
    position: relative;
    max-height: 7.7rem;
  }

  .container-right {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg.error {
      fill: ${({theme}) => theme.colors.error};
      height: 2.4rem;
      width: 2.4rem;
    }

    svg.like {
      fill: ${({theme}) => theme.colors.primary};
      height: 2.4rem;
      width: 2.4rem;
    }
  }

  .card-image {
    height: 100%;
    width: 100%;
    border-radius: 1.2rem;
    object-fit: cover;
    object-position: center;
  }

  .card-content-title {
    background: rgb(0 0 0/ 51%);
    border-radius: 1.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .card-title {
    margin-left: 1.5rem;
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-size: ${({theme}) => theme.fontSizes.large};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    text-align: center;
    color: ${({theme}) => theme.colors.buttonText};
  }
`
export default CardListImage
