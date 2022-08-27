import { createSlice } from '@reduxjs/toolkit'

export const rulesSlice = createSlice({
  name: 'rules',
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
export const { set, unset } = rulesSlice.actions
// Getter 
export const selectRules = (state) => state.rules.value
// Esporto lo stato 
export default rulesSlice.reducer
