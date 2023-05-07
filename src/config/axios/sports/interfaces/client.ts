export namespace SportClient {
  export interface ResponseSportList {
    sports: ISport[]
  }
  export interface ISport {
    id: string
    name: string
    image: string
  }
}
