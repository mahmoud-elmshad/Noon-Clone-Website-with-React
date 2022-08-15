import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

export default function PrivateRoute({ Component: RouteComponent, ...rest }) {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Route
      {...rest}
      render={(routeprops) =>
        !user ? <Navigate to={"/login"} /> : <RouteComponent {...routeprops} />
      }
    />
  );
}
// export default function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }
