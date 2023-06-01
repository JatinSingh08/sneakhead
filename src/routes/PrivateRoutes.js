import { Navigate, useLocation } from "react-router-dom";
import { useAuth, useData } from "../context"

 const PrivateRoutes = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate replace to='/login' state={{ from: location }}/>
}

// const PrivateCheckoutRoute = ({children}) => {
//   const { state: {cart} } = useData();
//   // const location = useLocation();

//   return <Navigate replace to='/productlist'  />
// }

export { 
  PrivateRoutes,
  // PrivateCheckoutRoute
}
