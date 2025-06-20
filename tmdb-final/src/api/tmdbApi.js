import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', // response데이터를 json객체로 달라고 서버에게 요청
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

// 인기영화, 개봉예정영화, 상영중영화
export const getMovies = async (category = 'popular', page = 1) => {
   //category = ' popular'받으면await tmdbApi.get(`/movie/${category}`를 가지고 옴

   const response = await tmdbApi.get(`/movie/${category}`, {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })

   return response
}

//영화 상세정보 불러오기
export const getMovieDetails = async (movieId) => {
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

//영화 출연배우 불러오기
export const getMovieCredits = async (movieId) => {
   //https://api.themoviedb.org/3/movie/1233413/credits?language=ko-KR
   const response = await tmdbApi.get(`/movie/${movieId}/credits`, {
      params: {
         language: 'ko-KR',
      },
   })

   return response
}

//영화 겸색 결과 불러오기
export const searchMovie = async (query, page = 1) => {
   //쿼리하고 하는 변수를 가져온다 query = 검색어
   //query=안녕 , page =1
   //'https://api.themoviedb.org/3/search/movie?query=검색어를 넣어준다&include_adult=false&language=ko-KR&region=KR'
   const response = await tmdbApi.get('/search/movie', {
      params: {
         query, //변수명이랑 키값이 같으니까 생략query: query
         page,
         language: 'ko-KR',
         include_adult: false,
         region: 'KR',
      },
   })
   return response
}

export default tmdbApi
