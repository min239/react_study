import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...가고싶다
      </div>
   )
}

function Topics() {
   return (
      <div>
         <h2>Topics</h2>
         Topics...
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}

//<a>태그로 작성시 지금은 링크를 클릭할 때마다 페이지 전체가 새로 로딩됩니다.
//Link 컴포넌트는 페이지가 리로드 되지 않게 자동으로 구현하는 컴포넌트 입니다.바뀌는 부분만

/* a태그로 링크 이동시 페이지가 전체 새로고침 되면서 모든 dom들이 다시렌더링이 된다 -> mpa방식
link컴포넌트로 이동시 바뀐 부부느이 dom만 리렌더링이 된다. ->spa방식 
->리엑트는 기본적으로 spa방식으로 동작하므로 link컴포넌트 사용을 추천!!!*/

function App() {
   return (
      <div>
         <h1>리엑트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
               {/* <Link to="/">Home</Link> */}
            </li>
            <li>
               {/* <Link to="/topics">Topics</Link> */}
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               {/* <Link to="/contact">Contact</Link> */}
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>

         {/*주소의 경로에 따라 어떤  컴포넌트를 보여줄지 지정 */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
            {/*지정한 경로 외(/*)에 다른 경로는 모두 Not Found를 보여준다 */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
