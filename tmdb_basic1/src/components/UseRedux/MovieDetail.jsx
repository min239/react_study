import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMoviesDetails } from '../../features/movieSlice'
function MovieDetail() {
   const { movieId } = useParams() //http://localhost:5178/detail/574475-> movieId를 가지고 옴
   //path에 있는 movieId를 가져옴
   const dispatch = useDispatch()
   /*state.movies는 전체 데이터를 가지고 온다
   state.movies = {
      movies: [], 
      movieDetails null
      loading: false
      error: nu
   }
   */
   const { movieDetails, loading, error } = useSelector((state) => state.movies) //MovieDetail, loading, error만 가져오기 state.movies.movies는 인기영화 가지고 오고 movieDetails넣으면 디테일만 가져옴

   //둠들이 다 실행되고 실행 (return 있는거)
   //맨 처음에  컴포넌트 렌더링후 1번 실행, 무비아이디 바뀔때 마다 실행
   useEffect(() => {
      if (movieId) {
         dispatch(fetchMoviesDetails(movieId))
      }
   }, [dispatch, movieId]) //useEffect에서 api 호출,useEffect에 dispatch있으면 []에 dispatch넣기

   if (loading) return <p>로디중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      /*
      맨 처음 렌더링 발생시 movieDetails의 값은 null
      -> 랜더링 이후 useEffect가 실행되면서 movieDetails 값이 들어옴
      -> && 렌더링 연산자를 이용해 movieDetails값이 있을 때만 렌더링 하도록함
      */
      <div style={{ padding: '20px' }}>
         {/*&& 앞이 트루이면 뒤 실행*/}
         {movieDetails && (
            <div>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} width="270" />
               </div>
               <div>
                  <h2>{movieDetails.title}</h2>
                  <h3>줄거리</h3>
                  <p>{movieDetails.overview}</p>
                  <h3>장르</h3> {/*배열 데이터라서 맵을 이용*/}
                  <p>{movieDetails.genres.map((genre) => `${genre.name} `).join(', ')}</p>
                  <h3>개봉일</h3>
                  <p>{movieDetails.release_date}</p>
                  <h3>평점</h3>
                  <p>{movieDetails.vote_average}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default MovieDetail
