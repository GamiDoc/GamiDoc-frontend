import { createSlice } from '@reduxjs/toolkit'

export const affordancesSlice = createSlice({
  name: 'affordances',
  initialState: {
    value: ["---", "---", "---", "---", "---", "---"],
  },
  reducers: {
    unset: (state) => {
      state.value = ""
    },
    set: (state, action) => {
      state.value[action.pos] = action.payload
    },
  },
})
// Reducers 
export const { set, unset } = affordancesSlice.actions
// Getter 
export const selectAffordances = (state) => state.affordances.value
// Esporto lo stato 
export default affordancesSlice.reducer
