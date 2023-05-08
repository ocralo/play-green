import {baseValues} from './baseValues'

export const lightTheme = {
  colors: {
    background: '#F3F3F3',
    primary: '#1A5BE1',
    disabled: '#777777',
    error: ' #D36060',
    success: '#6DD360',
    text: '#161617',
    textSecondary: '#232232',
    textInput: '#3C3C3C',
    backgroundInput: '#FFFFFF',
    buttonText: '#FEFEFE',
  },
  ...baseValues,
}

export const darkTheme = {
  colors: {
    background: '#181828',
    primary: '#FFFFFF',
    disabled: '#777777',
    error: ' #D36060',
    success: '#6DD360',
    text: '#FEFEFE',
    textSecondary: '#FEFEFE',
    textInput: '#FEFEFE',
    backgroundInput: '#2F2F43',
    buttonText: '#FEFEFE',
  },
  ...baseValues,
}
