// import MovieList from './components/NonRedux/MovieList'
// import MovieUpcoming from './components/NonRedux/MovieUpcoming'
import { Route, Routes } from 'react-router-dom'
import MovieList from './components/UseRedux/MovieList'
import MovieDetail from './components/UseRedux/MovieDetail'
import NotFound from './components/UseRedux/NotFound'

function App() {
   return (
      <Routes> {/*경로에 따라 다른 페이지를 보여줌,만들고 동작확인하기 */}
         <Route path="/" element={<MovieList />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
//https: