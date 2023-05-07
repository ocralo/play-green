import {SportApi} from '@config/axios/sports/interfaces/api'
import {SportClient} from '@config/axios/sports/interfaces/client'

export async function mapGetSports(
  sports: SportApi.ISport[]
): Promise<SportClient.ISport[]> {
  const sportsMapped = await sports.map((sport) => ({
    id: sport.idSport,
    name: sport.strSport,
    image: sport.strSportThumb,
  }))

  return sportsMapped
}

export default mapGetSports
