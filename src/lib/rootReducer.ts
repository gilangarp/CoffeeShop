import { combineReducers } from "redux";
import { persistedAuthReducer, persistedSignupReducer } from "./persistConfig";
import { passwordReducer } from "./features/password/slice/passwordSlice";

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  password: passwordReducer,
  signup: persistedSignupReducer,
});

export default rootReducer;
