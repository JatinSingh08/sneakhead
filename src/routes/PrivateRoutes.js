import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context"

export const PrivateRoutes = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate replace to='/login' state={{ from: location }}/>
}
