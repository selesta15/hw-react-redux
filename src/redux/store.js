import { createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { cashReduser } from "./cash/reduce";

const rootReducer = combineReducers({
  cash: cashReduser,
  counter: counterReducer

})

export const store = createStore(rootReducer, composeWithDevTools())

