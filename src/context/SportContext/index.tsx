import {useReducer} from 'react'
import apiGetSports from '@config/axios/sports'
import {addSportLiked} from '@config/firebase/sport'
import {SportFirebase} from '@config/firebase/sport/interfaces'
import randomNumber from '@utils/index'
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
        type: SportActionType.SET_SPORT,
        payload: {sport: response[randomNumber(0, response.length)]},
      })

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

  const addLikeSport = async (
    sportLiked: SportFirebase.ISportLiked
  ): Promise<void> => {
    dispatch({
      type: SportActionType.ADD_LIKE_SPORT_START,
    })
    try {
      await addSportLiked(sportLiked)
      const sport = {...sportLiked}
      const {liked, ...newSport} = sport

      dispatch({
        type: SportActionType.SET_SPORT,
        payload: {sport: state.sports[randomNumber(0, state.sports.length)]},
      })

      dispatch({
        type: SportActionType.ADD_LIKE_SPORT_SUCCESS,
        payload: {sportsLiked: newSport},
      })
    } catch (error: any) {
      dispatch({
        type: SportActionType.ADD_LIKE_SPORT_FAIL,
        payload: {error: error.message},
      })
    }
  }

  const getLikesSports = async (): Promise<void> => {
    dispatch({
      type: SportActionType.GET_LIKED_SPORTS_START,
    })
    try {
      const response = await apiGetSports()
      dispatch({
        type: SportActionType.GET_LIKED_SPORTS_SUCCESS,
        payload: {sports: response},
      })
    } catch (error: any) {
      dispatch({
        type: SportActionType.GET_LIKED_SPORTS_FAIL,
        payload: {error: error.message},
      })
    }
  }

  return (
    <contextSport.Provider
      value={{...state, getSports, addLikeSport, getLikesSports}}>
      {children}
    </contextSport.Provider>
  )
}
