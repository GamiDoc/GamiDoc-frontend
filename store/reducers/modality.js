import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const modalitySlice = createSlice({
  name: 'modality',
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
        ...action.payload.modality,
      }
    },
  },
})
// Reducers 
export const { set, unset } = modalitySlice.actions
// Getter 
export const selectModality = (state) => state.modality.value
// Esporto lo stato 
export default modalitySlice.reducer
