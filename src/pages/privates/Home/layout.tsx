import styled, {keyframes} from 'styled-components'

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

export const HomeLayout = styled.div`
  background: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  margin: 0;

  .home-container {
    display: block;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 42rem;
    height: 100%;
  }

  .home-container-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56rem;
    width: 39rem;
  }

  .home-card-image {
    align-self: flex-start;
    animation: ${appear} 0.4s ease-in-out forwards;
  }

  .like-button {
    background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
    box-shadow: ${({theme}) => theme.boxShadow.large};
    padding: ${({theme}) => theme.spacings.small};
    height: 8.1rem;
    width: 8.1rem;
    border-radius: 50%;
    animation: ${appear} 0.4s ease-in-out forwards;

    svg {
      fill: ${({theme}) => theme.colors.buttonText};
    }
  }

  .dislike-button {
    background: #fff;
    box-shadow: ${({theme}) => theme.boxShadow.small};
    padding: ${({theme}) => theme.spacings.small};
    height: 5.1rem;
    width: 5.1rem;
    border-radius: 50%;
    animation: ${appear} 0.4s ease-in-out forwards;

    svg {
      fill: ${({theme}) => theme.colors.error};
    }
  }

  .container-interaction {
    display: flex;
    justify-content: center;
    gap: ${({theme}) => theme.spacings.large};
    align-items: center;
    margin: 4.7rem 0;
    animation: ${appear} 0.4s ease-in-out forwards;
  }

  @media (min-width: ${({theme}) => theme.devices.small}) {
    padding: ${({theme}) => theme.spacings.medium};
  }

  @media (min-width: ${({theme}) => theme.devices.medium}) {
    padding: ${({theme}) => theme.spacings.medium};
    min-height: 97vh;
  }

  @media (min-width: ${({theme}) => theme.devices.large}) {
    padding: ${({theme}) => theme.spacings.large};
  }

  @media (min-width: ${({theme}) => theme.devices.xlarge}) {
    padding: ${({theme}) => theme.spacings.xlarge};
    min-height: 93vh;
  }
`

export default HomeLayout
