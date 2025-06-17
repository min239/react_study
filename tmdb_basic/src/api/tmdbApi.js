import axios from 'axios'
// TMDB API 기본 URL과 API 키 설정
const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

//axios는 객체를 생성해야함
//create() 함수 실행시 -> axios 객체 생성 -> axios를 통해 api를 call한다
const tmdbApi = axios.create({
   baseURL: BASE_URL, //똑같이 반복되는 url 넣기
   headers: {
      accept: 'application/json', //json객체로 결과값을 받겠다
      Authorization: `Bearer ${AUTH_KEY}`, //인증키
   },
})

//인기영화목록 가져오기
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/popular', {
      //쿼리스트링
      params: {
         language: 'ko-KR',
         page, //위에 1있으니 1은 생략
         region: 'KR',
      },
   }) //비동기로 하기 애를 실행하는동안 다른것도 실행할 수 있게 비동기로
   return response
}

// 개봉예정 영화 목록 가져오기
export const getUpcomingMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/upcoming', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

//영화 상세 정보 가져오기
export const getMoviesDetails = async (movieId) => {
   //https://api.themoviedb.org/3/movie/{movie_id}?language=ko-KR
   const response = await tmdbApi.get(`/movie/${movieId}`, {
      params: {
         language: 'ko-KR',
      },
   })

   return response //응답결과데이터를 리턴
}

//export는 하나만 exportdefault 는 여러개
export default tmdbApi
