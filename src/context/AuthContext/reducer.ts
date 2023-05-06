import {AuthContext} from './interfaces'
import AuthActionTypes from './types'

export function AuthContextReducer(
  state: AuthContext.State,
  action: AuthContext.Action
): AuthContext.State {
  const {type, payload} = action
  switch (type) {
    case AuthActionTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        user: null,
        isAuthenticated: false,
      }
    case AuthActionTypes.SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        user: null,
        isAuthenticated: false,
      }
    case AuthActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: payload.user,
        isAuthenticated: payload.isAuthenticated,
      }
    case AuthActionTypes.SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        user: null,
        isAuthenticated: false,
      }
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: payload.user,
        isAuthenticated: payload.isAuthenticated,
      }
    case AuthActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        user: null,
        isAuthenticated: false,
      }
    case AuthActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: null,
        isAuthenticated: false,
      }
    case AuthActionTypes.LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        user: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default AuthContextReducer
