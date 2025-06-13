import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: 'user',
   initialState: { name: '', age: 0 }, //처음에는 { name: '', age: 0 }
   reducers: {
      setName: (state, action) => {
         state.name = action.payload
      },
      setAge: (state, action) => {
         state.name = action.payload
      },
   },
})

export default userSlice.reducer //리듀서를 내보냄
export const { setName, setAge } = userSlice.actions //setName, setAge를 내보냄
