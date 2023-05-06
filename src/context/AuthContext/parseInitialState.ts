import {getSessionStorage} from '@utils/sessionStorage'
import {AuthContext} from './interfaces'

export default function parseInitialState(initialState: AuthContext.State) {
  return getSessionStorage('user', initialState) as AuthContext.State
}
