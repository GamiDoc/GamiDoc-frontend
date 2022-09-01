import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const personalizationSlice = createSlice({
  name: 'personalization',
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
        ...action.payload.personalization,
      }
    }
  }
})
// Reducers 
export const { set, unset } = personalizationSlice.actions
// Getter 
export const selectPersonalization = (state) => state.personalization.value
// Esporto lo stato 
export default personalizationSlice.reducer
