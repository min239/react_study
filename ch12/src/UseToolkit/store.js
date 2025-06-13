import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import userSlice from './userSlice'
const store = configureStore({
   reducer: {
      //json 형태로 만들어서 내보냄
      counter: counterSlice, //counter리듀서 counterSlice 초기값 가지고 있음
      user: userSlice, //user리듀서
   },
})

export default store
