import { createSlice } from '@reduxjs/toolkit'

export const deviceSlice = createSlice({
  name: 'device',
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
export const { set, unset } = deviceSlice.actions
// Getter 
export const selectDevice = (state) => state.device.value
// Esporto lo stato 
export default deviceSlice.reducer
