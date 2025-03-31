import { combineReducers } from "redux";
import { persistedAuthReducer, persistedSignupReducer } from "./persistConfig";
import { passwordReducer } from "./features/password/slice/passwordSlice";
import { navbarReducer } from "./features/navbar/slice/navbarSlice";

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  password: passwordReducer,
  signup: persistedSignupReducer,
  navbar: navbarReducer,
});

export default rootReducer;
