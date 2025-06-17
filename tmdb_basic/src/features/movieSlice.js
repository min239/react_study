import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMoviesDetails } from '../api/tmdbApi'

//createAsyncThunk:비동기 thunk액션  -> 영화목록을 api로 부터 가져옴
//{type: 'movies/fetchMovies'} 액션객체를 이렇게 만들었는데 createAsyncThunk를 넣어서 'movies/fetchMovies' 액션객체를 이렇게 만든다
//createAsyncThunk(type명, 비동기함수)
//비동기함수에서 API를 call하는 함수 실행
//type명= slice의 이름/ '변수명'으로 짓는다

//인기영화 목록 가져오기
//fetchMovies(): 액션 생성자 함수역할 fetchMovies는getMovies실행
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies() //await를 반드시 줘야함
   return response.data.results //배열데이터 줌 그러면 이데이터는  extraReducers로 간다
}) //여기서 실행

//영화상세 정보 가져오기
export const fetchMoviesDetails = createAsyncThunk('movies/fetchMoviesDetails', async (movieId) => {
   const response = await getMoviesDetails(movieId)
   console.log(response)
   return response.data
})

const movieSlice = createSlice({
   //json객체 만듬
   name: 'movies',
   initialState: {
      //첨에 이렇게 나옴
      //json객체형태
      movies: [], //인기있는 영화목록을 저장, 디테일은 다른 state에다가 저장
      movieDetails: null, //영화 상세 정보
      loading: false, //로딩여부를 저장
      error: null, //에러메세지 저장
   },
   reducers: {},
   //extraReducers:비동기 액션(createAsyncThunk)발생했을 때 state를 바꿔줌
   extraReducers: (builder) => {
      //fetchMovies를 실행하면 getMovies실행오류가 없으면 .addCase(fetchMovies.fulfilled,() => {}) 실행

      builder
         //데이터를 가져오는동안
         .addCase(fetchMovies.pending, (state) => {
            //action지워도 상관x
            state.loading = true //pending 상태일 떄 true
            state.error = null  //다른 액션생성자 함수에서 에러가 발생하면 에러가남아있는 경우를 대비해 초기화 해준다
         })
         //데이터를 성공적으로 가져온 경우
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false //로딩이 끝났으니 false
            //action.payload값은 extraReducers사용하면 fetchMovies함수에서 return해주는 값(response.data.results)
            state.movies = action.payload //인기있는 영화목록이 있는 배열이 들어있다
         })
         //api 호출이 실패한 경우
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message //에러메세지
         })

         .addCase(fetchMoviesDetails.pending, (state) => {
            //여깃서는fetchMoviesDetails를 실행
            state.loading = true
            state.error = null //다른 액션생성자 함수에서 에러가 발생하면 에러가남아있는 경우를 대비해 초기화 해준다
         })

         .addCase(fetchMoviesDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload //action.payload: fetchMoviesDetails를 실행할 떄 리턴해주는 값을 가져온다
         })

         .addCase(fetchMoviesDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})
export default movieSlice.reducer //리듀서 함수를 내보냄
