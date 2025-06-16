import { useDispatch, useSelector } from 'react-redux'
function CounterComponent() {
   //dispatch:=이벤트 발생시 액션 객체를 reducer로 전달
   const dispatch = useDispatch()
   //useSelector:store에 저장된 state를 어디서든지 가져온다
   const count = useSelector((state) => {
      //state = { count:0 }
      return state.count
   })

   return (
      <div>
         <h1>Counter:</h1>
         {/*dispatch(리듀서로 전달할 액션 객체) */}
         {/*액션객체:요구사항(주문)*/}
         {/* type:요구사항, payload: 리듀서에 전달해야 하는 값*/}
         {/* <button onClick={() => dispatch({ type: 'increment' })}>증가</button> */}
         <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>증가</button>
         <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>감소</button>
         {/* <button onClick={() => dispatch({ type: 'decrement' })}>감소</button> */}
      </div>
   )
}

export default CounterComponent
