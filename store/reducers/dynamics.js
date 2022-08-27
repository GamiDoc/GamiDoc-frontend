import { createSlice } from '@reduxjs/toolkit'

export const dynamicsSlice = createSlice({
  name: 'dynamics',
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
export const { set, unset } = dynamicsSlice.actions
// Getter 
export const selectDynamics = (state) => state.dynamics.value
// Esporto lo stato 
export default dynamicsSlice.reducer
