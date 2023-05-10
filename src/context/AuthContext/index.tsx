import {useCallback, useEffect, useMemo, useReducer} from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {auth} from '@config/firebase'
import {AuthContext} from './interfaces'
import {contextAuth, initialState} from './context'
import {AuthContextReducer} from './reducer'
import AuthActionTypes from './types'
import parseInitialState from './parseInitialState'

export default function AuthProvider({
  children,
}: AuthContext.Props): JSX.Element {
  const [state, dispatch] = useReducer(
    AuthContextReducer,
    initialState,
    parseInitialState
  )

  const signUp = useCallback(
    async (email: string, password: string): Promise<void> => {
      dispatch({type: AuthActionTypes.SIGNUP_START})
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error: any) {
        dispatch({
          type: AuthActionTypes.SIGNUP_FAIL,
          payload: {error: error.message},
        })
      }
    },
    []
  )

  const login = useCallback(
    async (email: string, password: string): Promise<void> => {
      dispatch({type: AuthActionTypes.LOGIN_START})
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error: any) {
        dispatch({
          type: AuthActionTypes.LOGIN_FAIL,
          payload: {error: error.message},
        })
      }
    },
    []
  )

  const logout = useCallback(async (): Promise<void> => {
    dispatch({type: AuthActionTypes.LOGOUT_START})
    try {
      await signOut(auth)
      dispatch({type: AuthActionTypes.LOGOUT_SUCCESS})
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.LOGOUT_FAIL,
        payload: {error: error.message},
      })
    }
  }, [])

  useEffect(() => {
    dispatch({type: AuthActionTypes.LOGIN_START})

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: {
            user: {
              id: user.uid,
              email: user.email as string,
              name: (user.displayName as string) || '',
            },
            isAuthenticated: true,
          },
        })
      } else {
        logout()
      }
    })
    return () => unsubscribe()
  }, [logout])

  const value = useMemo(
    () => ({
      ...state,
      signUp,
      login,
      logout,
    }),
    [state, signUp, login, logout]
  )

  return (
    <contextAuth.Provider key={'auth'} value={value}>
      {children}
    </contextAuth.Provider>
  )
}
