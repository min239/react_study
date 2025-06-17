import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNowMovies } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getNowMovies()
   return response.data.results
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      loading: false,
      error: null,
   },
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})
export default movieSlice.reducer
