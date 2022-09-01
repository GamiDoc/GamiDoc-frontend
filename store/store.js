// I devTools sono enabled di base in teoria usando configureStore e non createStore di "redux"
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit"
// Per le pagine statiche se mai useremo il serverPropsRenderer 
import { createWrapper } from "next-redux-wrapper";

// reducers   ( funzioni per cambiare lo stato) 
import { aestheticsSlice } from "./reducers/aesthetics";
import { affordancesSlice } from "./reducers/affordances";
import { contextSlice } from "./reducers/context";
import { deviceSlice } from "./reducers/device";
import { dynamicsSlice } from "./reducers/dynamics";
import { feedbackSlice } from "./reducers/feedback";
import { modalitySlice } from "./reducers/modality";
import { personalizationSlice } from "./reducers/personalization";
import { rulesSlice } from "./reducers/rules";

// initial states here
// const initalState = {};
// middleware
// const middleware = [thunk];

// creating store
export const store = configureStore({
  reducer: {
    [aestheticsSlice.name]: aestheticsSlice.reducer,
    [affordancesSlice.name]: affordancesSlice.reducer,
    [contextSlice.name]: contextSlice.reducer,
    [deviceSlice.name]: deviceSlice.reducer,
    [dynamicsSlice]: dynamicsSlice.reducer,
    [feedbackSlice.name]: dynamicsSlice.reducer,
    [modalitySlice.name]: modalitySlice.reducer,
    [personalizationSlice.name]: personalizationSlice.reducer,
    [rulesSlice.name]: rulesSlice.reducer,
  },
  devTools: 1,

}
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
