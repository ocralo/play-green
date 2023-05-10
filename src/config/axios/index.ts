import axios from 'axios'

export const sportApi = axios.create({
  baseURL: 'https://apimocha.com/playgreen/sports',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST_THESPORTDB,
  },
})

export default axios.create()
