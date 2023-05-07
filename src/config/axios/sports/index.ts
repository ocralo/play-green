import {sportApi} from '@config/axios'
import {mapGetSports} from './mappers/sport'
import {SportApi} from './interfaces/api'
import {SportEndpoint} from './endpoints'
import {SportClient} from './interfaces/client'

export async function apiGetSports(): Promise<SportClient.ISport[]> {
  try {
    const {data} = await sportApi.get<SportApi.ResponseSportList>(
      SportEndpoint.GET_SPORTS
    )
    return await mapGetSports(data.sports)
  } catch (error) {
    throw new Error('Error getting sports')
  }
}

export default apiGetSports
