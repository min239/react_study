import { useState } from 'react'
import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { useCallback } from 'react'

//submit 버튼을 눌렀을 때 onInsert(app.jsx에서 props로 받아온 함수)실행
function TodoInsert({ onInsert }) { // oninsert 부모로 부터 받은
   const [value, setValue] = useState('')
   const onChange = (e) => setValue(e.target.value)

   const onSubmit = useCallback((e) => {
      //e는 이벤트 객체
      // e.preventDefault() submit이벤트가 브라우저에 새로고침을 발생시키는 현상을 막아준다.
      e.preventDefault()

      onInsert(value) //할일등록,app컴포넌트에서 props로 받아온 oninsert()함수
      setValue('') //value state 초기화
   }, [value, onInsert]) //value를 위에서 사용중이라 value 써줘야하고 props에서 받아온 onInsert도 써야함
//onInsert자체도 usecallback으로 정의된 함수이며 todos state에 의존한다. 즉 todos가 변경될 때 마다 oninsert함수가 새로 만들어지므로 사용

   return (
      //onSubmit: submit버튼을 눌렀을 때 발생하는 이벤트
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="할일을 입력하세요" value={value} onChange={onChange} />
         <button type="submmit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default TodoInsert
