import {useReducer} from 'react'
import apiGetSports from '@config/axios/sports'
import {contextSport, initialState} from './context'
import {SportContext} from './interfaces'
import {SportContextReducer} from './reducer'
import SportActionType from './types'

export default function SportProvider({
  children,
}: SportContext.Props): JSX.Element {
  const [state, dispatch] = useReducer(SportContextReducer, initialState)

  const getSports = async (): Promise<void> => {
    dispatch({type: SportActionType.GET_SPORTS_START})
    try {
      const response = await apiGetSports()
      dispatch({
        type: SportActionType.GET_SPORTS_SUCCESS,
        payload: {sports: response},
      })
    } catch (error: any) {
      dispatch({
        type: SportActionType.GET_SPORTS_FAIL,
        payload: {error: error.message},
      })
    }
  }

  return (
    <contextSport.Provider value={{...state, getSports}}>
      {children}
    </contextSport.Provider>
  )
}
