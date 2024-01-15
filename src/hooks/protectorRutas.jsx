import React from "react";
import {Navigate, Outlet} from "react-router-dom";
export const ProtectorRutas = ({user, redirectTo, children}) => {
  // if (user == null) return <Navigate replace to={redirectTo}></Navigate>;

  if (user == null) {
    // Si redirectTo es un componente, simplemente renderízalo
    if (React.isValidElement(redirectTo)) {
      return redirectTo;
    }
    // Si redirectTo es una ruta, utiliza Navigate para redirigir
    return <Navigate replace to={redirectTo}></Navigate>;
  }
  return children ? children : <Outlet></Outlet>;
};
