//영화 상세페이지
import { Wrap, Main } from '../styles/styledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
function Detail() {
   return (
      <Wrap>
        <Menu />
         <Main $padding="30px 0">영화상세페이지</Main>
         <Footer />
      </Wrap>
   )
}

export default Detail
