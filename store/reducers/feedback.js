import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const feedbackSlice = createSlice({
  name: 'feedback',
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
        ...action.payload.feedback,
      }
    }
  }
})
// Reducers 
export const { set, unset } = feedbackSlice.actions
// Getter 
export const selectFeedback = (state) => state.feedback.value
// Esporto lo stato 
export default feedbackSlice.reducer
