//initialState는 초기값으로 있어야 하고 json객체로 생성한다.
const initialState = { count: 0 }

//state에는 항상 initialState를 디폴트 값으로 적용 -> state가 없을시 사용
//action:dispatch에서 전달해주는 액션을 받아온다.
function counterReducer(state = initialState, action) {
   //dispatch({type: 'increment}) 실행 후
   //action = { type: 'increment', payload:2 } 에서 받아온다

   //타입명은 자유롭게 지정
   //redux도 return해주는 값은 불변성을 유지해야 한다.(새로운 객체를 만들어서 반환)
   switch (action.type) {
      case 'increment':
         // return { count: state.count + 1 }
         return { count: state.count + action.payload }
      case 'decrement':
      //   return { count: state.count - 1 }
        return { count: state.count - action.payload }
      default:
        //맨 처음에 사이트에 들어오는 경우 action 값이 없기 때문에 initialState를 리턴해주도록 아래와 같이 지정
        return state
   }
}

export default counterReducer
