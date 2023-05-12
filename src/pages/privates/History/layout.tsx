import styled from 'styled-components'

export const HistoryLayout = styled.div`
  position: relative;
  background: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  margin: 0;

  .history-container {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 42rem;
    gap: 1.4rem;
  }

  .history-back-button {
    background: transparent;
    box-shadow: none;
    align-self: flex-start;
    padding: 0.6rem;
    margin-left: 3.2rem;
    margin-top: 5.4rem;
    margin-bottom: 1.8rem;

    svg {
      width: 3rem;
      height: 3rem;
      fill: ${({theme}) => theme.colors.text};
    }
  }

  .history-container-cards {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    max-height: 45vh;
    width: 100%;
    max-width: 42rem;
    gap: 1.4rem;
    overflow-y: auto;
  }

  .history-container-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49rem;
    width: 41rem;
  }

  .navigation-bar {
    margin-top: 4rem;
  }

  .history-title {
    margin-left: 3.2rem;
    margin-bottom: ${({theme}) => theme.spacings.small};
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-size: ${({theme}) => theme.fontSizes.xxlarge};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.text};
    text-align: left;
  }

  .history-description {
    align-self: flex-start;
    margin-left: 3.2rem;
    margin-bottom: ${({theme}) => theme.spacings.small};
    font-family: ${({theme}) => theme.fontFamily.secondary};
    font-size: ${({theme}) => theme.fontSizes.medium};
    font-weight: ${({theme}) => theme.fontWeights.regular};
    text-align: start;
    line-height: 148.02%;
    max-width: 32.2rem;
    color: ${({theme}) => theme.colors.text};
  }

  .history-date {
    align-self: flex-start;
    margin-left: 3.2rem;
    margin-bottom: 1.4rem;
    font-family: ${({theme}) => theme.fontFamily.secondary};
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: 600;
    text-align: start;
    line-height: 148.02%;
    max-width: 32.2rem;
    color: ${({theme}) => theme.colors.text};
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

export default HistoryLayout
