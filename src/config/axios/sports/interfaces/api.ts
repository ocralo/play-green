export namespace SportApi {
  export interface ResponseSportList {
    sports: ISport[]
  }

  export interface ISport {
    idSport: string
    strSport: string
    strFormat: string
    strSportThumb: string
    strSportIconGreen: string
    strSportDescription: string
  }
}
