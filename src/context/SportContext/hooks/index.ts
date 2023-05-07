import {useContext} from 'react'
import {contextSport} from '../context'
import {SportContext} from '../interfaces'

export const useSport = (): SportContext.State => {
  const context = useContext(contextSport)
  if (!context) {
    throw new Error('useSport must be used within a contextSport')
  }
  return context
}

export default useSport
