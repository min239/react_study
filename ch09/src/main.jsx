import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         {/* <HashRouter>  */}
         <App />
         {/* </HashRouter> */}
      </BrowserRouter>
   </StrictMode>
)
// HashRouter 서버에 전송X 컴포넌트만 보여줌
