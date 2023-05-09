import {SportContext} from './interfaces'
import SportActionType from './types'

export function SportContextReducer(
  state: SportContext.State,
  action: SportContext.Action
) {
  const {type, payload} = action

  switch (type) {
    case SportActionType.GET_SPORTS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        sports: null,
      }
    case SportActionType.GET_SPORTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        sports: payload.sports,
      }
    case SportActionType.GET_SPORTS_FAIL:
      return {
        ...state,
        isLoading: false,
        sports: null,
        error: payload.error,
      }
    case SportActionType.ADD_LIKE_SPORT_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case SportActionType.ADD_LIKE_SPORT_SUCCESS: {
      const sportsLiked = state.sportsLiked || []
      return {
        ...state,
        isLoading: false,
        error: null,
        sportsLiked: [...sportsLiked, payload.sportsLiked],
      }
    }
    case SportActionType.ADD_LIKE_SPORT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    case SportActionType.SET_SPORT:
      return {
        ...state,
        sport: payload.sport,
      }
    case SportActionType.GET_LIKED_SPORTS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case SportActionType.GET_LIKED_SPORTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        sportsLiked: payload.sportsLiked,
      }
    case SportActionType.GET_LIKED_SPORTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    default:
      return state
  }
}

export default SportContextReducer
