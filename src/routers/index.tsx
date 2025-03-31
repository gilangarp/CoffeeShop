import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import SignIn from "../pages/signin/SignIn";
import { Error } from "../pages/Error/Error";
import UserLayout from "../pages/layout/UserLayout";
import { PrivateRoute } from "./PrivateRouter";
import { Unauthorized } from "../pages/Error/Unauthorized";
import { getCookie } from "../lib/cookie";

export default function AppRoutes() {
  const token = getCookie("token");
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/signin"
            element={token ? <Navigate to="/" replace /> : <SignIn />}
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Home />} />
          <Route element={<UserLayout />}>
            <Route
              path="/profile"
              element={
                <PrivateRoute
                  requiredRoles={["admin", "user"]}
                  redirectTo="/signin"
                >
                  <Home />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}
