import {SportClient} from '@config/axios/sports/interfaces/client'

export namespace SportContext {
  export interface State {
    sports: SportClient.ResponseSportList[] | null
    isLoading: boolean
    error: string | null
    getSports(): Promise<void>
  }

  export interface Action {
    type: string
    payload?: any
  }

  export interface Props {
    children: React.ReactNode
  }
}
