import StyleEnum from '@config/styles/enums'

export namespace ThemeStyleContext {
  export interface State {
    theme: StyleEnum
    switchTheme: () => void
  }

  export interface Props {
    children: React.ReactNode
  }
}
