//component는 대부분 대문자로 만드고 jsx로
import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'
function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      //count-> 2를 count에 넣어줌
      console.log(state) //json형태로 가져오기 때문에 밑에서 값만 가져온다 {ounter: {value:0}값을 가져옴
      return state.counter.value
   })
   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2)) //클릭시실행
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            -
         </button>
         {count}
      </div>
   )
}

export default Counter
