import { createContext } from 'react'
import './App.css'
import { useContext } from 'react'

const themeDefault = { border: '10px solid green' }
//데이터를 공유하기 위한 Context생성
const themeContext = createContext(themeDefault)

function App() {
   const theme = useContext(themeContext) //useContext를 통해서 가져옴
   console.log(theme)
   return (
      <div className="root" style={theme}>
         <h1>Hello world!</h1>
         <Sub1 />
      </div>
   )
}
function Sub1() {
   return (
      <div>
         <h1>Sub1</h1>
         <Sub2 />
      </div>
   )
}

function Sub2() {
   const theme = useContext(themeContext) //useContext를 통해서 가져옴 원하는 곳 다 적용 가능
   return (
      <div style={theme}>
         <h1>Sub2</h1>
         <Sub3 />
      </div>
   )
}

function Sub3() {
   return (
      <div>
         <h1>Sub3</h1>
      </div>
   )
}

export default App
