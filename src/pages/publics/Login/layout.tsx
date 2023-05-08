import styled from 'styled-components'

export const LoginLayout = styled.div`
  background: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;

  .login-submit-button {
    height: 6.6rem;
    width: 12.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    align-self: flex-start;
    font-size: ${({theme}) => theme.fontSizes.medium};
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  .login-signup-button {
    margin-top: ${({theme}) => theme.spacings.medium};
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    align-self: flex-end;
    font-size: ${({theme}) => theme.fontSizes.medium};
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-weight: ${({theme}) => theme.fontWeights.bold};
  }

  .login-input-user {
    margin-top: 0;
    margin-bottom: 0;
  }

  .login-input-password {
    margin-top: ${({theme}) => theme.spacings.small};
    margin-bottom: ${({theme}) => theme.spacings.large};
    color: ${({theme}) => theme.colors.text};
  }

  .login-title {
    margin-bottom: ${({theme}) => theme.spacings.small};
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-size: ${({theme}) => theme.fontSizes.xxlarge};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    text-align: center;
    color: ${({theme}) => theme.colors.text};
  }

  .login-forgot {
    margin-bottom: ${({theme}) => theme.spacings.large};
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-family: ${({theme}) => theme.fontFamily.primary};
    font-size: ${({theme}) => theme.fontSizes.medium};
    font-weight: ${({theme}) => theme.fontWeights.regular};
    align-self: flex-start;
    color: ${({theme}) => theme.colors.text};

    &:hover {
      cursor: not-allowed;
    }
  }

  .login-description {
    margin-bottom: ${({theme}) => theme.spacings.large};
    font-family: ${({theme}) => theme.fontFamily.secondary};
    font-size: ${({theme}) => theme.fontSizes.medium};
    font-weight: ${({theme}) => theme.fontWeights.regular};
    text-align: center;
    line-height: 148.02%;
    max-width: 32.2rem;
    color: ${({theme}) => theme.colors.text};
  }

  .login-form {
    padding: 0;
    width: 100%;
    max-width: 32.2rem;
  }

  @media (min-width: ${({theme}) => theme.devices.small}) {
    padding: ${({theme}) => theme.spacings.medium};
  }

  @media (min-width: ${({theme}) => theme.devices.medium}) {
    padding: ${({theme}) => theme.spacings.medium};
    height: 95vh;
  }

  @media (min-width: ${({theme}) => theme.devices.large}) {
    padding: ${({theme}) => theme.spacings.large};
  }

  @media (min-width: ${({theme}) => theme.devices.xlarge}) {
    padding: ${({theme}) => theme.spacings.xlarge};
    height: 92vh;
  }
`

export default LoginLayout
