import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";

const reducer = combineReducers({
  //here we will be adding reducers
  auth,
});

const store = configureStore({
  reducer,
});

export default store;
