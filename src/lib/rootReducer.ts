import { combineReducers } from "redux";
import { persistedAuthReducer } from "./persistConfig";
import { passwordReducer } from "./features/password/slice/passwordSlice";
import { signupReducer } from "./features/user/slices/signupSlice";

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  password: passwordReducer,
  signup: signupReducer,
});

export default rootReducer;
