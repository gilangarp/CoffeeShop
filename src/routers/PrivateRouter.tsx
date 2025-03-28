import React from "react";
import { Navigate } from "react-router-dom";
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

  if (!token) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!role || !requiredRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
