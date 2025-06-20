//영화 상세페이지
import { Wrap, Main } from '../styles/styledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieDetail from '../components/slider/MovieDetail'
import CreditSlider from '../components/slider/CreditsSlider'
function Detail() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieDetail />
            <CreditSlider />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Detail
