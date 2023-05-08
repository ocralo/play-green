import {createContext} from 'react'
import {SportContext} from './interfaces'

export const initialState: SportContext.State = {
  sports: null,
  isLoading: false,
  sportsLiked: null,
  error: null,
  getSports: async () => {},
  addLikeSport: async () => {},
  getLikesSports: async () => {},
}

export const contextSport = createContext<SportContext.State>(initialState)
