import useTheme from '@context/ThemeContext/hooks'
import StyleEnum from '@config/styles/enums'
import SunIcon from '@components/Icons/Sun'
import MoonIcon from '@components/Icons/Moon'

import {ButtonSwitchThemeComponent} from './interfaces'

export default function ButtonSwitchThemeBase({
  className,
}: ButtonSwitchThemeComponent.Props): JSX.Element {
  const {theme, switchTheme} = useTheme()
  

  return (
    <button className={className} key={theme} onClick={() => switchTheme()}>
      {theme === StyleEnum.THEME_LIGHT ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
