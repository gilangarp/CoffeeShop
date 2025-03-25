import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRouteWrapper from "../components/navigation/ProtectedRouteWrapper";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route>
          <Route index path="/" element={<Home />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
