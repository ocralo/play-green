import styled from 'styled-components'
import CardImageBase from './base'

export const CardImage = styled(CardImageBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 56.4rem;
  max-width: 42rem;
  width: 100%;
  border-radius: 0 0 3.2rem 3.2rem;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 0 10px rgb(0 0 0 / 25%);
  transition: all 0.2s ease-in-out;

  .card-image {
    height: 100%;
    width: 100%;
    border-radius: 0 0 3.2rem 3.2rem;
    object-fit: cover;
    object-position: center;
  }

  .card-content-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: -10rem;
    height: 10rem;
    width: 100%;
    border-radius: 0 0 3.2rem 3.2rem;
    background: linear-gradient(
      360deg,
      #000 0%,
      #000 58.85%,
      rgb(0 0 0 / 0%) 100%
    );
  }

  .card-title {
    margin-left: 2rem;
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-size: ${({theme}) => theme.fontSizes.xlarge};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    text-align: center;
    color: #fefefe;
  }
`
export default CardImage
