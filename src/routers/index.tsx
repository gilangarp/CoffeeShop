import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import SignIn from "../pages/signin/SignIn";
import { Error } from "../pages/Error/Error";
import UserLayout from "../pages/layout/UserLayout";
import { PrivateRoute } from "./PrivateRouter";
import { Unauthorized } from "../pages/Error/Unauthorized";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/signin"
            element={
              <PrivateRoute requiredRoles={["user"]} redirectTo="/">
                <SignIn />
              </PrivateRoute>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/dashboard"
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
