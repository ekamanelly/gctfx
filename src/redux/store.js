import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";


const intialState = {};
const middleware = [thunk];
export const store = createStore(
  rootReducer,
  intialState,
  compose(
    applyMiddleware(...middleware)
  )
);




