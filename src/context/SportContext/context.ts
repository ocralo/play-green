import {createContext} from 'react'
import {SportContext} from './interfaces'

export const initialState: SportContext.State = {
  sports: null,
  isLoading: false,
  error: null,
  getSports: async () => {},
}

export const contextSport = createContext<SportContext.State>(initialState)
