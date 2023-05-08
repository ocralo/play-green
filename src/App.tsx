import {useContext} from 'react'
import {ThemeProvider} from 'styled-components'
import RoutesApp from '@routes/index'
import AuthProvider from '@context/AuthContext'
import SportProvider from '@context/SportContext'
import {contextThemeStyle} from '@context/ThemeContext/context'
import {darkTheme, lightTheme} from '@config/styles/themes'
import StyleEnum from '@config/styles/enums'

function App(): JSX.Element {
  const { theme } = useContext(contextThemeStyle)
  return (
    <>
      <ThemeProvider
        theme={theme === StyleEnum.THEME_LIGHT ? lightTheme : darkTheme}>
        <AuthProvider>
          <SportProvider>
            <RoutesApp />
          </SportProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
