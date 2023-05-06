import {useContext} from 'react'
import {contextAuth} from '../context'
import {AuthContext} from '../interfaces'

export const useAuth = (): AuthContext.State => {
  const context = useContext(contextAuth)
  if (!context) {
    throw new Error('useAuth must be used within a contextAuth')
  }
  return context
}

export default useAuth
