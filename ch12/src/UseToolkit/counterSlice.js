//slice는reducer를 여러개 나눠서 저장
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice', //slice이름(store안에 slice가 여러개가 될수 있으므로 구분하는 이름 지정)을 지명해줘야함
   initialState: { value: 0 }, //counterSlice -> 여기서 state의 초기값
   reducers: {
      //state를 직접적으로 바꿔주는 역할
      up: (state, action) => {
         state.value += action.payload // state.value=0    ,action.payload=2
         //기존에 있던 state value에 더하는 것 2 = 0 + 2
         //툴킷에서는 state값을 직접변경가능 -기존에는 불변성떄문에 원본데이터를 건드리지 않고 ...state를 통해 복사해서 만들었지만 톨킷에서는 기존에 있는 데이터를 사용함
      },// +클릭시 이부분 실행 ,콘솔실행시 action:{type:counterslice/up, payload:2}가 나옴 타입은 자동으로 만들어줌 
      down: (state, action) => {
        
         state.value -= action.payload 
      },
   },
})

export default counterSlice.reducer //reducer를 내보냄

export const { up, down } = counterSlice.actions //reducers안에 정의한 up, down함수를 내보냄
