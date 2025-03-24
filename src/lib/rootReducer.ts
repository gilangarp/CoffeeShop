import { combineReducers } from "redux";
import { persistedAuthReducer } from "./persistConfig";

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

export default rootReducer;
