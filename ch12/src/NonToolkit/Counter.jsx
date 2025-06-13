//component는 대부분 대문자로 만드고 jsx로
import { useDispatch, useSelector } from 'react-redux'
function Counter() {
   const dispatch = useDispatch()
   //state={vlaue: 0}
   const count = useSelector((state) => state.value)
   return (
      <div>
         <button
            onClick={() => {
               dispatch({ type: 'UP', step: 1 }) //클릭시 reducer호출
            }}
         >
            +
         </button>
         {count}
      </div>
   )
}

export default Counter
