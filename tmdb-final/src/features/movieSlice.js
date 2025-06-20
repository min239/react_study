import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails, getMovieCredits, searchMovie } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ category, page }) => {
   //action-> movies/fetchMovies
   //  json으로 작성해야 함 json객체로 작성 MovieCategory에서 보냄 그래서 여기에 { category: 'popular', page: 1 }이 들어감 비구조화로 getmovies 실행
   //    async() 카테고리와 페이지값 가져옴
   const response = await getMovies(category, page)
   console.log(response) //데이터를 가져오는데 response가 어떤 데이터가 오는지 잘모르기때문에 콘솔로 구조보기
   return response.data.results //여기서 어떤값을 리턴 할지 결정-> 배열데이터
})

export const fetchMovieDetails = createAsyncThunk('moives/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data // ->json객체
})

export const fetchMovieCredits = createAsyncThunk('moives/fetchMovieCredits', async (movieId) => {
   const response = await getMovieCredits(movieId)
   console.log(response.data) ////데이터를 가져오는데 response가 어떤 데이터가 오는지 잘모르기때문에 콘솔로 구조보기
   return response.data
})

//영화 검색해주는 페치함수
export const fetchSearchResults = createAsyncThunk('movies/fetchSearchResults', async ({ query, page }) => {
   // query = '안녕', page = 1
   const response = await searchMovie(query, page)
   console.log(response.data.results)
   return response.data.results
})

const movieSlice = createSlice({
   //초기 state지정
   name: 'movies',
   initialState: {
      //fetch함수에서 return해주는 값이 배열일떄는 초기state는 빈배열
      //fetch함수에서 return해주는 값이 객체일떄는 초기state는 null
      movies: [], //현재상영 or 개봉예정 or 인기영화목록 리턴해주는 값이 배열데이터 []을 줌 객체이면은 null
      movieDetails: null, //영화상세 정보
      movieCredits: null, //배우정보
      searchResults: [], //검색한 영화 목록
      loading: false, //로딩여부
      error: null, //에러메세지
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false

            //action.meta.arg에서는 fetch함수에서 매개변수로 받아온 값을 가져올 수 있음
            //페이지가 1페이지 일떄는 새로운 state로 업데이트
            if (action.meta.arg.page === 1) {
               state.movies = action.payload
            } else {
               //페이지가 2페이지 이상일때는 기존 데이터 + 새로운 데이터 state로 업데이트
               state.movies = [...state.movies, ...action.payload]
            }

            // state.movies = action.payload ->사용하면 기존에 있던 데이터는 없어지고 새로운 데이터만 들어감 기존데이터와 새로운 데이터를 합쳐야함(위에 if문으로 해결)!!
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieCredits.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieCredits.fulfilled, (state, action) => {
            state.loading = false
            state.movieCredits = action.payload
         })
         .addCase(fetchMovieCredits.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchSearchResults.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.loading = false

            // action.meta.arg에서는 fetch 함수에서 매개변수로 받아온 값을 가져올 수 있음
            // 페이지가 1페이지 일때는 새로운 state로 업데이트
            if (action.meta.arg.page === 1) {
               state.searchResults = action.payload
            } else {
               // 페이지가 2페이지 이상일때는 기존 데이터 + 새로운 데이터 state로 업데이트
               state.searchResults = [...state.searchResults, ...action.payload]
            }
         })
         .addCase(fetchSearchResults.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})
export default movieSlice.reducer //보내기
