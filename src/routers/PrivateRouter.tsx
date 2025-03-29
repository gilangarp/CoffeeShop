import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../lib/cookie";
import { useAppSelector } from "../lib/hook";

interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo: string;
  requiredRoles: string[];
}

export const PrivateRoute = ({
  children,
  redirectTo,
  requiredRoles,
}: PrivateRouteProps) => {
  const token = getCookie("token");
  const { role } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (token && location.pathname === "/signin") {
    return <Navigate to="/" replace />;
  }
  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!role || !requiredRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
