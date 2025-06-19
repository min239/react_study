import './css/Menu.css'
import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink to="/">
                     <img src="/images/logo.svg" alt="로고" width="160" />
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/popular">인기영화</NavLink>
               </li>
               <li>
                  <NavLink to="/now_playing">현재상영중</NavLink>
               </li>
               <li>
                  <NavLink to="/upcoming">개봉예정</NavLink>
               </li>
               <li style={{ float: 'right' }} className="login">
                  <NavLink to="/login">로그인</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
