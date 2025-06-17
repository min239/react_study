import { useParams } from 'react-router-dom'

function MovieDetail() {
   const { movieId } = useParams() //http://localhost:5178/detail/574475-> movieId를 가지고 옴
   console.log(movieId)
   //path에 있는 movieId를 가져옴
   return (
      <div style={{ padding: '20px' }}>
         <div>
            <div></div>
            <div>
               <h2></h2>
               <h3>줄거리</h3>
               <p></p>
               <h3>장르</h3>
               <p></p>
               <h3>개봉일</h3>
               <p></p>
               <h3>평점</h3>
               <p></p>
            </div>
         </div>
      </div>
   )
}

export default MovieDetail
