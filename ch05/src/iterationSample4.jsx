import { useState } from 'react'

function InterationSample4() {
   const [names, setNames] = useState([
      //state에서 json객체를 하나씩 가져옴
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>) //
   console.groupCollapsed(nameList)

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)
   const onChange = (e) => setInputText(e.target.value)

   //리스트에 값 추가
   const onClick = () => {
      //concat():두개 이상의 배열을 합침
      /*names= { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
       */
      const nextNames = names.concat({
         id: nextId, //5 초기값
         text: inputText, //state,구름,input창에서 사용자가 입력한 값
      })
      setNames(nextNames) // names-> nextNames로 바꾸;ㅁ ,name state를 합친 배열린 nextNames로 변경
      setNextId(nextId + 1) //6 , 다음에 데이터 추가시 nextId를 1씩 증가시키기 위해
      setInputText('') //빈문자열로 "", inputText초기화
      //그리고 state값이 변경되어서 다시 랜더링 
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul> {/* 그리고 랜더링후 namelist를 보여줌 */}
      </>
   )
}

export default InterationSample4
