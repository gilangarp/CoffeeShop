import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routers";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor, persistStore } from "redux-persist";

const persistor: Persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);
