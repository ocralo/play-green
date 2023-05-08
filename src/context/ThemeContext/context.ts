import StyleEnum from '@config/styles/enums'
import {createContext} from 'react'
import {ThemeStyleContext} from './interfaces'

export const initialState: ThemeStyleContext.State = {
  theme: StyleEnum.THEME_LIGHT,
  switchTheme: () => {},
}

export const contextThemeStyle =
  createContext<ThemeStyleContext.State>(initialState)
