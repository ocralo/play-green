import {SportClient} from '@config/axios/sports/interfaces/client'

export namespace SportFirebase {
  export interface ResponseSportList {
    sports: ISportLiked[]
  }

  export interface ISportLiked extends SportClient.ISport {
    liked: boolean
  }
}
