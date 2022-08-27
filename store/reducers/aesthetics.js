import { createSlice } from '@reduxjs/toolkit'

export const aestheticsSlice = createSlice({
  name: 'aesthetics',
  initialState: {
    value: "",
  },
  reducers: {
    unset: (state) => {
      state.value = ""
    },
    set: (state, action) => {
      state.value = action.payload
    },
  },
})
// Reducers 
export const { set, unset } = aestheticsSlice.actions
// Getter 
export const selectAesthetics = (state) => state.aesthetics.value
// Esporto lo stato 
export default aestheticsSlice.reducer
