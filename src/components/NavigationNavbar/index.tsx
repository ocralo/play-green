import styled from 'styled-components'
import NavigationNavbarBase from './base'

export const NavigationNavbar = styled(NavigationNavbarBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme}) => theme.colors.backgroundNavigation};
  border-radius: ${({theme}) => theme.borderRadius.xlarge};
  padding: ${({theme}) => theme.spacings.medium};
  margin: 0 2.2rem;
  gap: ${({theme}) => theme.spacings.xlarge};

  .button-navigation {
    background: ${({theme}) => theme.colors.backgroundNavigation};
    border: 0;
    border-radius: ${({theme}) => theme.borderRadius.large};
    color: ${({theme}) => theme.colors.text};
    cursor: pointer;
    padding: 2rem;
    transition: 0.3s;

    svg {
      fill: ${({theme}) => theme.colors.disabled};
    }

    &:hover {
      background: ${({theme}) => theme.colors.buttonNavigation};

      svg {
        fill: ${({theme}) => theme.colors.iconActive};
      }
    }

    &.active {
      background: ${({theme}) => theme.colors.buttonNavigation};

      svg {
        fill: ${({theme}) => theme.colors.iconActive};
      }
    }
  }
`

export default NavigationNavbar
