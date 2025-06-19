//메인페이지
import { Wrap, Main } from '../styles/styledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
function Home() {
   return (
      <Wrap>
         <Menu />
         <Main>영화상세페이지</Main>
         <Footer />
      </Wrap>
   )
}

export default Home
