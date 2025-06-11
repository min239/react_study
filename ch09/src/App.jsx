import { Route, Routes, Link, NavLink, useParams } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...가고싶다
      </div>
   )
}

var contents = [
   { id: 1, title: 'HTML', description: 'HTML is...' },
   { id: 2, title: 'JS', description: 'JS is...' },
   { id: 3, title: 'React', description: 'React is...' },
]

function Topic() {
   const params = useParams() //경로 파라메터를 가져온다
   console.log(params)
   const topic_id = params.topic_id //topic_id 는 계속 바뀜
   let selected_topic = {
      title: 'Sorry',
      description: 'Not Found',
   }
   //contents배열에서 id가 같은 topic_id와 ㄱ같은 데이터를 찾은 후 selected_topic에 넣어준다
   for (var i = 0; i < contents.length; i++) {
      //contents[i].id 123을 가져와서  Number(topic_id))선택한 값을 찾는다
      if (contents[i].id === Number(topic_id)) {
         selected_topic = contents[i] //찾을 값을selected_topic넣어준다
         break //찾은 이후에는 for문을 빠져나옴
      }
   }
   return (
      <div>
         <h3>{selected_topic.title}</h3>
         <p>{selected_topic.description}</p> {/*//http://localhost:5173/topics/123 가져옴 */}
      </div>
   )
}

function Topics() {
   //반복문을 이용해서 만듬 //'/topics/' + contents[i].id topics 123만들어줌 html 누르면 1 css누르면 2 react 3
   var lis = []
   for (var i = 0; i < contents.length; i++) {
      lis.push(
         <li key={contents[i].id}>
            <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
         </li>
      )
   }
   return (
      <div>
         <h3>Topics</h3>
         <ul>{lis}</ul>

         <Routes>
            {/* <Route path="/1" element={'html is ...'} />
            <Route path="/2" element={'css is ...'} />
            <Route path="/3" element={'react is ...'} /> */}
            <Route path="/:topic_id" element={<Topic />} /> {/* 위에 3개를 합침 */}
         </Routes>
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...DWDWDD
      </div>
   )
}

function App() {
   return (
      <div>
         <h1>리엑트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
            </li>
         </ul>

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
