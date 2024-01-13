import {Navigate, Outlet} from "react-router-dom";
export const ProtectorRutas = ({user, redirectTo, children}) => {
  if (user == null) return <Navigate replace to={redirectTo}></Navigate>;
  return children ? children : <Outlet></Outlet>;
};
