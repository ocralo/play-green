export namespace AuthContext {
  export interface State {
    user: IUser | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
    signUp(email: string, password: string): Promise<void>
    login(email: string, password: string): Promise<void>
    logout(): Promise<void>
  }

  export interface Action {
    type: string
    payload?: any
  }

  export interface IUser {
    id: string
    name: string
    email: string
  }

  export interface Props {
    children?: React.ReactNode
  }
}
