import React, {useContext} from 'react'
import {ThemeProvider} from 'styled-components'
import RoutesApp from '@routes/index'
import AuthProvider from '@context/AuthContext'
import SportProvider from '@context/SportContext'
import {contextThemeStyle} from '@context/ThemeContext/context'
import {darkTheme, lightTheme} from '@config/styles/themes'
import StyleEnum from '@config/styles/enums'

const AuthProviderMemo = React.memo(AuthProvider)
const SportProviderMemo = React.memo(SportProvider)
const RoutesAppMemo = React.memo(RoutesApp)
const ThemeProviderMemo = React.memo(ThemeProvider)

function Component(): JSX.Element {
  const {theme} = useContext(contextThemeStyle)

  return (
    <>
      <ThemeProviderMemo
        theme={theme === StyleEnum.THEME_LIGHT ? lightTheme : darkTheme}>
        <AuthProviderMemo>
          <SportProviderMemo>
            <RoutesAppMemo />
          </SportProviderMemo>
        </AuthProviderMemo>
      </ThemeProviderMemo>
    </>
  )
}

const App = React.memo(Component)

export default App
