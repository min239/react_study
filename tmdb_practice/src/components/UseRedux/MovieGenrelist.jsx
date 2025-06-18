import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenreList } from '../../features/movieSlice'
import { Link } from 'react-router-dom'

function MovieGenrelist() {
   const dispatch = useDispatch()
   const { movieGenreList, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchGenreList())
   }, [dispatch])

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         <h1>장르리스트</h1>
         <ul>
            {movieGenreList.map((movie) => (
               <Link key={movie.id} to={`/detail/${movie.id}`}>
                  <li>{movie.name}</li>
               </Link>
            ))}
         </ul>
      </div>
   )
}

export default MovieGenrelist
