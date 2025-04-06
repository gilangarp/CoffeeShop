import { combineReducers } from "redux";
import { persistedAuthReducer, persistedSignupReducer } from "./persistConfig";
import { passwordReducer } from "./features/password/slice/passwordSlice";
import { navbarReducer } from "./features/navbar/slice/navbarSlice";
import { getAllProductReducer } from "./features/product/slice/getAllProductSlice";

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  password: passwordReducer,
  signup: persistedSignupReducer,
  navbar: navbarReducer,
  product: getAllProductReducer,
});

export default rootReducer;
