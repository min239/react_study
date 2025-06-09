import { useState } from 'react'

function InterationSample5() {
   const [names, setNames] = useState([
      //state에서 json객체를 하나씩 가져옴
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   /*nameList
<li key=0 onDoubleClick={() => {
            onRemove(1)>눈사람</li>
<li key=1 onDoubleClick={() => {
            onRemove(2)>얼음</li>
<li key=2>눈</li>
<li key=3>바람</li>
*/
   const nameList = names.map((name) => (
      <li
         key={name.id}
         onDoubleClick={() => {
            onRemove(name.id)
         }}
      >
         {name.text}
      </li>
   )) //
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
   //filter이용하여 리스트삭제
   const onRemove = (id) => {
      //처음에 id가2
      const nextNames = names.filter((name) => name.id !== id) // name.id는1  id는 2

      setNames(nextNames) /*Nextnames= { id: 1, text: '눈사람' },
                                       { id: 3, text: '눈' },
                                       { id: 4, text: '바람' },
       */
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul> {/* 그리고 랜더링후 namelist를 보여줌 */}
      </>
   )
}

export default InterationSample5
