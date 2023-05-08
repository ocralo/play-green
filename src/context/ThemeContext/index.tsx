import {useState} from 'react'
import {StyleEnum} from '@config/styles/enums'
import {contextThemeStyle, initialState} from './context'
import {ThemeStyleContext} from './interfaces'

export default function ThemeStyleProvider({
  children,
}: ThemeStyleContext.Props): JSX.Element {
  const [state, setState] = useState<{
    theme: StyleEnum
  }>(initialState)

  const switchTheme = () => {
    setState({
      theme:
        state.theme === StyleEnum.THEME_LIGHT
          ? StyleEnum.THEME_DARK
          : StyleEnum.THEME_LIGHT,
    })
  }

  return (
    <contextThemeStyle.Provider value={{...state, switchTheme}}>
      {children}
    </contextThemeStyle.Provider>
  )
}
