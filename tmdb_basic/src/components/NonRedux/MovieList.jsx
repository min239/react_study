import { useEffect, useState } from 'react'
import { getMovies } from '../../api/tmdbApi'

function MoviesList() {
   const [movies, setMovies] = useState([]) //응답받은 영화목록
   const [loading, setLoading] = useState(true) //로딩중 여부 기본값은 true
   const [error, setError] = useState(null) //에러메세지

   //컴포넌트가 최초로 렌더링(마운트)된후 1번만 실행
   //api호출가능
   useEffect(() => {
      // 영화 목록 가져오기
      const fetchMovies = async () => {
         try {
            const movieList = await getMovies() // 1페이지의 영화 목록 가져오기
            setMovies(movieList.data.results) //movies state에 영화목록 데이터 저장
         } catch (err) {
            setError(err.message) //error state에 에러메시지 저장
         } finally {
            setLoading(false) //loading완료
         }
      }

      fetchMovies()
   }, [])
   //loading state가 true면 로딩중 컴포넌트를 렌더링
   if (loading) return <p>로딩중...</p> //1.먼저 실행

   //error state에 에러메시지가 있으면 error메세지 컴포넌트를 렌더링
   if (error) return <p>Error: {error}</p>

   ///loading state가 flase면서 error state에 에러메세지가 없으면 영화 목록 컴포넌트를 렌더링 밑에 있는 거를 보여줌
   return (
      <div>
         <h1>인기영화 목록2</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MoviesList
