import {baseValues} from './baseValues'

export const lightTheme = {
  colors: {
    background: '#F3F3F3',
    backgroundCardList: '#FFFFFF',
    primary: '#1A5BE1',
    disabled: '#777777',
    error: ' #D36060',
    success: '#6DD360',
    text: '#161617',
    textSecondary: '#232232',
    textInput: '#3C3C3C',
    backgroundInput: '#FFFFFF',
    buttonText: '#FEFEFE',
    backgroundNavigation: '#FFFFFF',
    buttonNavigation: '#F5F5F5',
    iconActive: '#1A5BE1',
  },
  ...baseValues,
}

export const darkTheme = {
  colors: {
    background: '#181828',
    backgroundCardList: '#212135',
    primary: '#FFFFFF',
    disabled: '#777777',
    error: ' #D36060',
    success: '#6DD360',
    text: '#FEFEFE',
    textSecondary: '#FEFEFE',
    textInput: '#FEFEFE',
    backgroundInput: '#2F2F43',
    buttonText: '#FEFEFE',
    backgroundNavigation: '#2C2B3E',
    buttonNavigation: '#1F1F31',
    iconActive: '#FFFFFF',
  },
  ...baseValues,
}
