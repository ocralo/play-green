import styled from 'styled-components'

/* const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
` */

export const HistoryLayout = styled.div`
  background: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  .history-container-cards {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    max-height: 55vh;
    width: 100%;
    max-width: 42rem;
    gap: 1.4rem;
    overflow-y: auto;
  }

  .navigation-bar {
    margin-top: 4rem;
  }

  .history-title {
    margin-bottom: ${({theme}) => theme.spacings.small};
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-size: ${({theme}) => theme.fontSizes.xxlarge};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    text-align: center;
    color: ${({theme}) => theme.colors.text};
  }

  .history-description {
    margin-bottom: ${({theme}) => theme.spacings.large};
    font-family: ${({theme}) => theme.fontFamily.secondary};
    font-size: ${({theme}) => theme.fontSizes.medium};
    font-weight: ${({theme}) => theme.fontWeights.regular};
    text-align: center;
    line-height: 148.02%;
    max-width: 32.2rem;
    color: ${({theme}) => theme.colors.text};
  }

  .history-date {
    margin-bottom: ${({theme}) => theme.spacings.large};
    font-family: ${({theme}) => theme.fontFamily.secondary};
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: 600;
    text-align: center;
    line-height: 148.02%;
    max-width: 32.2rem;
    color: ${({theme}) => theme.colors.text};
  }

  @media (min-width: ${({theme}) => theme.devices.small}) {
    padding: ${({theme}) => theme.spacings.medium};
  }

  @media (min-width: ${({theme}) => theme.devices.medium}) {
    padding: ${({theme}) => theme.spacings.medium};
    min-height: 95vh;
  }

  @media (min-width: ${({theme}) => theme.devices.large}) {
    padding: ${({theme}) => theme.spacings.large};
  }

  @media (min-width: ${({theme}) => theme.devices.xlarge}) {
    padding: ${({theme}) => theme.spacings.xlarge};
    min-height: 92vh;
  }
`

export default HistoryLayout
