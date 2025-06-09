import { useState } from 'react'

function InterationSample3() {
   const [names, setNames] = useState([
      //state에서 json객체를 하나씩 가져옴
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>) //
   console.groupCollapsed(nameList)

   return <ul>{nameList}</ul>
}

export default InterationSample3
