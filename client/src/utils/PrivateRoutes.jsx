import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookie } from "./cookies";

const PrivateRoutes = () => {
  const token = getCookie("token");
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ prevURL: location.pathname }} />
  );
};

export default PrivateRoutes;