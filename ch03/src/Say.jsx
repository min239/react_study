import { useState } from 'react'

const Say = () => {
   //state:컴포넌트 내부에서 바뀔수 있는 값
   /* state를 사용하기 위해 usestate 선언 message저장 setMessage함수
   const [state 값을 저장할 변수, state값을 바꿀 함수] = usestate(초기state값 지정)
   useState사용 state값을 바꿀 함수*/
   const [message, setMessage] = useState('초기값')
   const onClickEnter = () => {
      setMessage('안녕하세요')
   }
   const onClickleave = () => {
      setMessage('안녕하가세요')
   }

   const [color, Setcolor] = useState('yellow')

   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickleave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>
         <button
            onClick={() => {
               Setcolor('red')
            }}
         >
            빨간
         </button>
         <button
            onClick={() => {
               Setcolor('green')
            }}
         >
            초록
         </button>
         <button
            onClick={() => {
               Setcolor('blue')
            }}
         >
            파란
         </button>
      </div>
   )
}

export default Say
