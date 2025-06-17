import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchMovies} from '../../features/movieSlice'

function MovieList() {
    const dispatch = useDispatch()
    const {movies, loading, error} = useSelector((state) => state.movies)

useEffect(() => {
    dispatch(fetchMovies())
},[dispatch])


if (loading) return <p>로딩중...</p>
if (error) return <p>Error: {error}</p>

    return (
       <div>
          <h1>현재상영중인 영화</h1>
          <ul>
             {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
             ))}
          </ul>
       </div>
    )
}

export


default  MovieList;