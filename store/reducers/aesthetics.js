import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const aestheticsSlice = createSlice({
  name: 'aesthetics',
  initialState: {
    // aesthetics: {
    value: "",
    // }
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
        ...action.payload.aesthetics,
      }
    },
  },
})
// Reducers 
export const { set, unset } = aestheticsSlice.actions
// Getter 
export const selectAesthetics = (state) => state.aesthetics.value
// Esporto lo stato 
export default aestheticsSlice.reducer
