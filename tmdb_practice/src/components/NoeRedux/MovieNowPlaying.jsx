import { useEffect, useState } from 'react'
import { getNowMovies } from '../../api/tmdbApi'

function MovieNowPlaying() {
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchMovies = async () => {
         try {
            const movieList = await getNowMovies()
            setMovies(movieList.data.results)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }

      fetchMovies()
   }, [])

   if (loading) return <p>로딩중..</p>

   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>개봉예정 영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieNowPlaying
