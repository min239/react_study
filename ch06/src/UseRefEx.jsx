import { useRef } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)

   const handleClick = () => {//버튼이 눌렀을 때 실행되도록 onclick
    //input 요소에 포커스 설정
    inputRef.current.focus()
   }
   return (
      <div>
         <input type="text" ref={inputRef} /> {/* dom을 직접적으로 다루고 싶은 요소에 inputRef를 적용*/}
         <button onClick={handleClick}>Focus Input</button>
      </div>
   )
}

export default UseRefEx
