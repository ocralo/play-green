import {useCallback, useMemo, useState} from 'react'
import {StyleEnum} from '@config/styles/enums'
import {contextThemeStyle, initialState} from './context'
import {ThemeStyleContext} from './interfaces'

export default function ThemeStyleProvider({
  children,
}: ThemeStyleContext.Props): JSX.Element {
  const [state, setState] = useState<{
    theme: StyleEnum
  }>(initialState)

  const switchTheme = useCallback(() => {
    setState({
      theme:
        state.theme === StyleEnum.THEME_LIGHT
          ? StyleEnum.THEME_DARK
          : StyleEnum.THEME_LIGHT,
    })
  }, [state])

  const value = useMemo(() => ({...state, switchTheme}), [state, switchTheme])

  return (
    <contextThemeStyle.Provider key={'theme'} value={value}>
      {children}
    </contextThemeStyle.Provider>
  )
}
