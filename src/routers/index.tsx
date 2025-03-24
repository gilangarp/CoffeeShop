import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRouteWrapper from "../components/navigation/ProtectedRouteWrapper";
import Home from "../pages/home/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouteWrapper
              requiredRoles={["admin", "user"]}
              redirectTo="/signin"
              element={<Home />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
