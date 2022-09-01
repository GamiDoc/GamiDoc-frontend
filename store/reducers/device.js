import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper"
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.device,
      }
    }
  }
})
// Reducers 
export const { set, unset } = deviceSlice.actions
// Getter 
export const selectDevice = (state) => state.device.value
// Esporto lo stato 
export default deviceSlice.reducer
