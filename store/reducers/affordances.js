import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const affordancesSlice = createSlice({
  name: 'affordances',
  initialState: {
    // affordances: {
    value: ["---", "---", "---", "---", "---", "---"],
    // }
  },
  reducers: {
    unset: (state) => {
      state.value = ""
    },
    set: (state, action) => {
      state.value[action.pos] = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.affordances,
      }
    },
  },
})
// Reducers 
export const { set, unset } = affordancesSlice.actions
// Getter 
export const selectAffordances = (state) => state.affordances.value
// Esporto lo stato 
export default affordancesSlice.reducer
