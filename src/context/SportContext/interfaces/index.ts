import {SportFirebase} from '@config/firebase/sport/interfaces'
import {SportClient} from '@config/axios/sports/interfaces/client'

export namespace SportContext {
  export interface State {
    sport: SportClient.ISport | null
    sports: SportClient.ISport[] | null
    sportsLiked: SportFirebase.ISportLiked[] | null
    isLoading: boolean
    error: string | null
    getSports(): Promise<void>
    addLikeSport(sport: SportFirebase.ISportLiked): Promise<void>
    getLikesSports(): Promise<void>
  }

  export interface Action {
    type: string
    payload?: any
  }

  export interface Props {
    children: React.ReactNode
  }
}
