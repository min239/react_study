import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay } from 'swiper/modules'
import { Loading, MarginDiv } from '../../styles/styledComponent'

import 'swiper/css'
import 'swiper/css/scrollbar'
import '../css/CreditsSlider.css' //커스터마이징 할 수있는 css
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMovieCredits } from '../../features/movieSlice'
function CreditsSlider() {
   const { movieId } = useParams()
   const dispatch = useDispatch()

   /*
    state.movies = {
      movies: [], 
      movieDetails: null, 
      movieCredits: [], 
      loading: false, 
      error: null,
    }
     */
   const { movieCredits, loading, error } = useSelector((state) => state.movies) //키값 넣기

   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieCredits(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <Loading />
   if (error) return <p>Error: {error}</p>

   return (
      <MarginDiv>
         <h2>출연배우</h2>
         <Swiper
            slidesPerView={5} //한 페이지당 몇개의 slider를 보여줄지
            spaceBetween={30} //슬라이드간 간격: 30px
            scrollbar={{
               hide: true,
            }}
            autoplay={{
               delay: 3000, //3초뒤 이동
               disableOnInteraction: false, //사용자가 슬라이드를 직접 조작(클릭,터치 드래그 했을 때 autoplay를 멈출지 말지를 결정하는 설정)
            }}
            modules={[Scrollbar, Autoplay]}
            className="mySwiper"
         >
            {/*movieCredits 초기state값이 null이기 때문에 &&조건부 렌더링 연산자 반드시 사용 해야함 */}
            {movieCredits &&
               movieCredits.cast.map((cast) => (
                  <SwiperSlide key={cast.id}>
                     <div style={{ padding: 20 }}>
                        <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w400${cast.profile_path}` : '/images/person.png'} alt={cast.name} />
                        <p style={{ fontWeight: 'bold' }}>{cast.name}</p>
                     </div>
                  </SwiperSlide>
               ))}
         </Swiper>
      </MarginDiv>
   )
}

export default CreditsSlider
