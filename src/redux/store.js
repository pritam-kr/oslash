import { combineReducers, createStore } from "redux";
import { shitReducer } from "./reducer/shitReducer";

const allReducer = combineReducers({ shitReducer });

export const store = createStore(allReducer);
