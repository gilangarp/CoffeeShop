import { PathRouteProps, Route } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRouter";

interface ProtectedRouteWrapperProps extends PathRouteProps {
  requiredRoles: string[];
  redirectTo: string;
}

const ProtectedRouteWrapper = ({
  requiredRoles,
  redirectTo,
  element,
  ...rest
}: ProtectedRouteWrapperProps) => {
  return (
    <Route
      {...rest}
      element={
        <PrivateRoute redirectTo={redirectTo} requiredRoles={requiredRoles}>
          {element}
        </PrivateRoute>
      }
    />
  );
};

export default ProtectedRouteWrapper;
