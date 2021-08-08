import { combineReducers } from "redux";
import mainReducer from "./MainReducer";

const combinedReducers = combineReducers({ mainReducer });

export default combinedReducers;
