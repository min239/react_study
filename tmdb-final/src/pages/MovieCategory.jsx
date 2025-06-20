// 인기영화, 현재 상영중, 개봉예정 페이지 처음에 오는페이지

import { Wrap, Main, Loading } from '../styles/styledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieCard from '../components/slider/MovieCard'
import Button from '@mui/material/Button'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchMovies } from '../features/movieSlice'
function MovieCategory({ category }) {
   //1.여기서 category 받음 처음에 popular들어온다
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)//2.실행 loading true여서 loading부분보여줌

   /*movies여기에 배열데이터 저장되어 있음 */

   //카테고리 별 페이지번호 저장
   /*
   page = {
      popular:1,
      now_playing:1,
      upcoming:1,
   } 
   */ 
   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   //category가 바뀔떄(메뉴 누를 때) 또는 page가 바뀔 때(더 보기 버튼 누를 땔) 동작 더보기 버튼을 누르면 2를 가지고 와야하는데 dispatch(fetchMovies({ category, page: page[category] }))가  실행
   useEffect(() => {
      dispatch(fetchMovies({ category, page: page[category] })) //  json객체 {category:popular ,page:1} popular을 보내고 싶으면 여기를 바꾸고 slice에 추가, category를 props로 받아와서 다른 category 전달, { category: category, page: 1 } category생략,
      //page[category]-> json객체에서 값 가져오는 것
   }, [dispatch, category, page]) //categort를 넣어야 클릭할때 마다 페이지가 바뀐다!!, 더보기 클릭시 page2로 바뀌면서 이 함수 다시 실행

   //더 보기 버튼 클릭시 실행되는 함수
   const loadMore = () => {
      //catrgory별로 저장하는 페이지를 다르게 가져와야한다
      //페이지가 바뀔때-> 내가 현재 들어와 있는 카테고리의 page번호를 1씩 증가시킴

      /*prevState 복사해서 가져옴
      page = {
      popular:1,
      now_playing:1,
      upcoming:1,
      }
       popular:1,
      now_playing:1,
      upcoming:1,
      popular:2
      이전데이터  popular:1 지워짐
      */
      setPage((prevState) => {
         return {
            ...prevState,
            [category]: prevState[category] + 1, //[category]현재 카테고리 가져옴 -> popular, prevState[category]-> 1 그다음 +1 해서 =2
         }
      })
   }
   //페이지 번호가 1일때만 loading 실행함 -> 더보기 클릭시 로딩 컴포넌트가 렌더링되면서 위로 올라오는 현상 위로 올라오는 현상 방지 
   if (loading && page[ category ] === 1) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <Loading />
            </Main>
            <Footer />
         </Wrap>
      )
   }
   if (error) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>Error: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      //MovieCard카드에서 props를 받음
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={movies} />
            <Button
               variant="outlined"
               sx={{
                  margin: '20px auto',
                  display: 'block',
                  width: '500px',
               }}
               onClick={loadMore} //더보기 버튼 누르면 loadmore실행
            >
               더 보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
