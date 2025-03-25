import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routers";
import { Provider } from "react-redux";
import { store } from "./lib/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
