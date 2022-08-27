import { createSlice } from '@reduxjs/toolkit'

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
})
// Reducers 
export const { set, unset } = feedbackSlice.actions
// Getter 
export const selectFeedback = (state) => state.feedback.value
// Esporto lo stato 
export default feedbackSlice.reducer
