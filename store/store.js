// I devTools sono enabled di base in teoria usando configureStore e non createStore di "redux"
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit"
// Per le pagine statiche se mai useremo il serverPropsRenderer 
import { createWrapper } from "next-redux-wrapper";

// reducers   ( funzioni per cambiare lo stato) 
import aestheticsReducer from "./reducers/aesthetics";
import affordancesReducer from "./reducers/affordances";
import contextReducer from "./reducers/context";
import deviceReducer from "./reducers/device";
import dynamicsReducer from "./reducers/dynamics";
import feedbackReducer from "./reducers/feedback";
import modalityReducer from "./reducers/modality";
import personalizationReducer from "./reducers/personalization";
import rulesReducer from "./reducers/rules";

// initial states here
// const initalState = {};
// middleware
// const middleware = [thunk];

// creating store
export const store = configureStore({
  reducer: {
    aestheticsReducer,
    affordancesReducer,
    contextReducer,
    deviceReducer,
    dynamicsReducer,
    feedbackReducer,
    modalityReducer,
    personalizationReducer,
    rulesReducer,
  },
  devTools: true,
}
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
