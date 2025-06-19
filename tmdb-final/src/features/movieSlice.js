import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ category, page }) => {
   //action-> movies/fetchMovies
   //  json으로 작성해야 함 json객체로 작성 MovieCategory에서 보냄 그래서 여기에 { category: 'popular', page: 1 }이 들어감 비구조화로 getmovies 실행
   //    async() 카테고리와 페이지값 가져옴
   const response = await getMovies(category, page) //데이터를 가져오는데 response가 어떤 데이터가 오는지 잘모르기때문에 콘솔로 구조보기
   console.log(response)
   return response.data.results //여기서 어떤값을 리턴 할지 결정 배열데이터
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [], //현재상영 or 개봉예정 or 인기영화목록 리턴해주는 값이 배열데이터 []을 줌 객체이면은 null
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
            if(action.meta.arg.page ===1) {
                state.movies =action.payload
            } else { //페이지가 2페이지 이상일때는 기존 데이터 + 새로운 데이터 state로 업데이트
                state.movies = [...state.movies, ...action.payload]

            }

            // state.movies = action.payload ->사용하면 기존에 있던 데이터는 없어지고 새로운 데이터만 들어감 기존데이터와 새로운 데이터를 합쳐야함(위에 if문으로 해결)!!
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer //보내기
