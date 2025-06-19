import { Wrap, Main } from '../styles/styledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
//검색결과 페이지
function SearchResults() {
   return (
      <Wrap>
        <Menu />
         <Main $padding="30px 0">검색결과 페이지</Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
