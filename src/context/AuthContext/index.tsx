import {useEffect, useReducer} from 'react'
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

export default function AuthProvider({
  children,
}: AuthContext.Props): JSX.Element {
  const [state, dispatch] = useReducer<
    (state: AuthContext.State, action: AuthContext.Action) => AuthContext.State
  >(AuthContextReducer, initialState)

  const signUp = async (email: string, password: string): Promise<void> => {
    dispatch({type: AuthActionTypes.SIGNUP_START})
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.SIGNUP_FAIL,
        payload: {error: error.message},
      })
    }
  }

  const login = async (email: string, password: string): Promise<void> => {
    dispatch({type: AuthActionTypes.LOGIN_START})
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.LOGIN_FAIL,
        payload: {error: error.message},
      })
    }
  }

  const logout = async (): Promise<void> => {
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
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: {
            user: {
              id: user.uid,
              email: user?.email as string,
              name: (user?.displayName as string) || '',
            },
            isAuthenticated: true,
          },
        })
      } else {
        dispatch({type: AuthActionTypes.LOGOUT_SUCCESS})
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <contextAuth.Provider
      value={{...state, signUp, login, logout}}
      key={'auth'}>
      {children}
    </contextAuth.Provider>
  )
}