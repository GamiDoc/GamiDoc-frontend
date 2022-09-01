import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper"
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.dynamics,
      }
    }
  }
})
// Reducers 
export const { set, unset } = dynamicsSlice.actions
// Getter 
export const selectDynamics = (state) => state.dynamics.value
// Esporto lo stato 
export default dynamicsSlice.reducer
