import { useDispatch, useSelector } from 'react-redux'
import {up, down} from './counterSlice'

function Counter() {
   const dispatch = useDispatch
   //state.counter = { value: 0}
   const count = useSelector((state) => state.counter.value) //counter는 store에서 counter라고 지정해줬는데 톨킷에서는 slice를 여러개를 만들수 있다 그래서 값을 가져올때 storre에서 지정한 이름, state.store에 지정한 슬라이스 key값을 넣어줘야 값을 가져올 수 있다.
   return (
      <div>
         <button onClick={() => {
            //dispatch({type: 'up' , payload:2})툴킷은 이 객체를 자동으로 만들어준다
            //액션 생성자 함수(payload값)
            
            dispatch(up(2))}}>증가</button> 
         <button onClick={()=> {dispatch(down(2))}}>감소</button>
      </div>
   )
}

export default Counter
