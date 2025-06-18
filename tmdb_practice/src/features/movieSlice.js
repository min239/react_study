import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMoviesDetails, getMoviesList } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()

   return response.data.results //배열
})

export const fetchMoviesDetails = createAsyncThunk('movies/fetchMoviesDetails', async (movieId) => {
   const response = await getMoviesDetails(movieId) //
   console.log(response)
   return response.data // 객체데이터
})

export const fetchGenreList = createAsyncThunk('movies/fetchGenreList', async () => {
   const response = await getMoviesList()
   console.log(response.data.genres)
   return response.data.genres //베열데이터 줌 그러면 이데이터는 extraReducer로 간다
}) //MovieGenrelist호출 리스트파일에서 fetchGenreList()를 가지고 옴

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      movieDetails: null,
      movieGenreList: [],//장르목록을 저장할수 있게 만들어야함 배열데이터이니까 [] 사용
      loading: false,
      error: null,
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

            state.movies = action.payload
         })

         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchMoviesDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })

         .addCase(fetchMoviesDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })

         .addCase(fetchMoviesDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchGenreList.pending, (state) => {
            state.loading = true
            state.error = null
         })

         .addCase(fetchGenreList.fulfilled, (state, action) => {
            state.loading = false
            state.movieGenreList = action.payload
         })

         .addCase(fetchGenreList.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})
export default movieSlice.reducer
