import axios from 'axios'

export const sportApi = axios.create({
  baseURL: 'https://thesportsdb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST_THESPORTDB,
  },
})

export default axios.create()
