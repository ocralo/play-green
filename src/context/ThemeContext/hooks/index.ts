import {useContext} from 'react'
import {contextThemeStyle} from '../context'
import {ThemeStyleContext} from '../interfaces'

export const useTheme = (): ThemeStyleContext.State => {
  const context = useContext(contextThemeStyle)
  if (!context) {
    throw new Error('useTheme must be used within a contextTheme')
  }
  return context
}

export default useTheme
