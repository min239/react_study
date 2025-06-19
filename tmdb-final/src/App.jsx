import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieCategory from './pages/MovieCategory'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />

         {/*경로에 따라 바뀌는 catrgory라는 props를 넣는다,*/}

         {/* 여러 경로에서 같은 컴포넌트를 사용시 주의점 
         
         라우터의 특징 새로운 데이터를 바뀐 부분만 가지고 온다. 그래서 인기영화 개봉예정영화 상영영화 가져오는데 문제가 생김.하나의 컴포넌트를 여러개 사용하고 있어서

         최초로 메뉴를 클릭시 moviecategory 컴포넌트를 렌터링(마운트) 이후 다른 메뉴 클릭시 moviecategory 컴포넌트를 새로 마운트 하지 않고 재렌더링(재랜더링이 되어도 page state는 유지한다 그러면 새로운 메뉴를 클릭했을 때 해당 페이지 번호가 1이 되지 못하므로 문제가 발생한다.) 
          
         => 따라서 기존 moviecategory를 언마운트 하고 새로운 마운트가 일어나도록 하기 위해서 key props사용(page state가 모두 1로 초기화 된다.) 
         
      category props 상관없이 key props만 지정해도 언마운트 후 마운트 됨
      key는 라우터가 컴포넌트를 구분하기 위한 props
      moviecartegory를 하나의 컴포넌트로 보지 않고 각각 다른 컴포넌트로 인식해 마운트를 발생시킨다
         <Route path="/popular" element={<MovieCategory  key="popular" />} />
         <Route path="/now_playing" element={<MovieCategory  key="now_playing" />} />
         <Route path="/upcoming" element={<MovieCategory />}  key="nupcoming" />
         */}
         <Route path="/popular" element={<MovieCategory category="popular" key="popular" />} />
         <Route path="/now_playing" element={<MovieCategory category="now_playing" key="now_playing" />} />
         <Route path="/upcoming" element={<MovieCategory />} category="nupcoming" key="nupcoming" />

         <Route path="/search" element={<SearchResults />} />
         <Route path="/detail/:movieId" element={<Detail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
//https://localhosr:5173/popular  MovieCategory를 보여줌
//https://localhosr:5173/now_playing  MovieCategory를 보여줌
//https://localhosr:5173/upcoming은 MovieCategory를 보여줌

//https://localhosr:5173/upcoming은 SearchResults를 보여줌
