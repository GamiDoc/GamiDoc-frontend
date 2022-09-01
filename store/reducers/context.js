import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const contextSlice = createSlice({
  name: 'context',
  initialState: {
    value: {
      behavior: "",
      domain: "",
      aim: "",
      targetAge: "",
      targetCat: ""
    },
  },
  reducers: {
    setBehavior: (state, action) => {
      state.value.behavior = action.payload
    },
    setDomain: (state, action) => {
      state.value.domain = action.payload
    },
    setAim: (state, action) => {
      state.value.aim = action.payload
    },
    setAge: (state, action) => {
      state.value.targetAge = action.payload
    },
    setCat: (state, action) => {
      state.value.targetCat = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.context,
      }
    }
  }
})
// Reducers 
export const { setBehavior, setDomain, setAim, setAge, setCat } = contextSlice.actions
// Getter 
export const selectContext = (state) => state.context.value
// Esporto lo stato 
export default contextSlice.reducer
