//처음에 state값이 없으면 initialState 사용
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
//state={vlaue: 0}
//action={ type:'UP', step:1}
   //일반 자바스크립트는 소문자 시작

   /*{ value :0, value: 1} -> value:0은 지워짐 
   */
   if (action.type === 'UP') {
      return { ...state, value: state.value + action.step }
   }
   return state //state값이 없으면 return해서 vlaue=0
}

export default counterReducer
