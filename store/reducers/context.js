import { createSlice } from '@reduxjs/toolkit'

export const contextSlice = createSlice({
  name: 'context',
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
export const { set, unset } = contextSlice.actions
// Getter 
export const selectContext = (state) => state.context.value
// Esporto lo stato 
export default contextSlice.reducer
