import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

export const getNowMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/now_playing', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

export default tmdbApi
