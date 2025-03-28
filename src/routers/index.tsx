import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import SignIn from "../pages/signin/SignIn";
import Address from "../pages/address/Address";
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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route
            path="/address"
            element={
              <PrivateRoute
                requiredRoles={["user"]}
                redirectTo="/signin"
                children={<Address />}
              />
            }
          />
          <Route path="/" element={<UserLayout />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute
                  requiredRoles={["admin", "user"]}
                  redirectTo="/signin"
                  children={<Home />}
                />
              }
            />
          </Route>
        </>
      </Routes>
    </BrowserRouter>
  );
}
