import { PersistConfig } from "redux-persist";
import { authReducer, authState } from "./features/auth/slice/authSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const authPersistConfig: PersistConfig<authState> = {
  key: "auth-token",
  storage,
  whitelist: ["id", "role"],
};
export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
