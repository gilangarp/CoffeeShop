import { PersistConfig } from "redux-persist";
import { authReducer, authState } from "./features/auth/slice/authSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { signupReducer, signupState } from "./features/user/slices/signupSlice";

const authPersistConfig: PersistConfig<authState> = {
  key: "auth",
  storage,
  whitelist: ["uuid", "role"],
};
export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);

const signupPersistConfig: PersistConfig<signupState> = {
  key: "signup",
  storage,
  whitelist: ["uuid", "role"],
};
export const persistedSignupReducer = persistReducer(
  signupPersistConfig,
  signupReducer
);
