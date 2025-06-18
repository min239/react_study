import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/movieSlice'
import { Link } from 'react-router-dom'

function MovieList() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies) //movies는 store에 지정되어 있는 키값

   /* 
state.movies = {
      movies: [...],
      loading: false
      error: null
   }
*/

   //useEffect는 마운트(최초로 시작) 됐을 떄 1번 동작
   useEffect(() => {
      //fetchMovies->fetchMovies(): 액션 생성자 함수역할
      dispatch(fetchMovies()) //여기서 액션생성자 함수 실행 reducer(slice로 가서) 영화데이터를 가져와서 slice밑에서 출력
   }, [dispatch]) //useEffect안에서 dispatch사용시 []안에 dispatch지정해줘야 함

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         <h1>인기영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <Link key={movie.id} to={`/detail/${movie.id}`}> {/*링크 만들기 무비아이디를 디테일파일에서 유스파라로 가져온다*/}
                  <li>{movie.title}</li>
               </Link>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
