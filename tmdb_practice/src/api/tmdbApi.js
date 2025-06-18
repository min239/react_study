import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})
//현재 상영영화
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/now_playing', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}
//영화 상세 정보
export const getMoviesDetails = async (movieId) => {
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })

   return response
}
//장르목록 페이지
export const getMoviesList = async () => {
   const response = await tmdbApi.get('/genre/movie/list', {
      params: {
         language: 'ko-KR',
      },
   })

   return response
}

export default tmdbApi
