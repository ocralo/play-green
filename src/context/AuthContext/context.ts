import {createContext} from 'react'
import {AuthContext} from './interfaces'

export const initialState: AuthContext.State = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  signUp: async (): Promise<void> => {},
  login: async (): Promise<void> => {},
  logout: async (): Promise<void> => {},
}

export const contextAuth = createContext<AuthContext.State>(initialState)
