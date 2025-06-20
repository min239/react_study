import { Wrap, Main, Loading } from '../styles/styledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'
import MovieCard from '../components/slider/MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchSearchResults } from '../features/movieSlice'
import { useSearchParams } from 'react-router-dom'

//검색결과 페이지
function SearchResults() {
   const [searchParams] = useSearchParams() // query 파라메터 값 가져옴
   const query = searchParams.get('query') // 검색어

   const [page, setPage] = useState(1) // 페이지 번호
   const dispath = useDispatch()
   const { searchResults, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispath(fetchSearchResults({ query, page }))
   }, [dispath, page, query])

   // 더보기 누르면 page 1씩 증가
   const loadMore = () => {
      setPage((prevState) => prevState + 1)
   }

   if (loading && page === 1) {
      return (
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
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
            <Main $padding="30px 0">
               <h2>오류발생: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            {/* 검색결과가 없을 경우를 대비 */}
            {searchResults.length > 0 ? (
               <>
                  <MovieCard movies={searchResults} />
                  <Button
                     variant="outlined"
                     sx={{
                        margin: '20px auto',
                        display: 'block',
                        width: '500px',
                     }}
                     onClick={loadMore}
                  >
                     더 보기
                  </Button>
               </>
            ) : (
               <h2>검색결과가 없습니다</h2>
            )}
         </Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
