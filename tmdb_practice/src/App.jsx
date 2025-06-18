// import MovieGenrelist from './components/NonRedux/MovieGenrelist'
import { Route, Routes } from 'react-router-dom'
import MovieList from './components/UseRedux/MovieList'
import MovieDetail from './components/UseRedux/MovieDetail'
import NotFound from './components/UseRedux/NotFound'
import MovieGenrelist from './components/UseRedux/MovieGenrelist'

function App() {
   return (
      <Routes>
         <Route path="/" element={<MovieList />} />
         <Route path="/genre" element={<MovieGenrelist />} />
         <Route path="/detail/:movieId" element={<MovieDetail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
