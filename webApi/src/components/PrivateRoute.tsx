import { Route, RouteProps, Redirect } from "react-router-dom";
import { AuthenticationService } from "../services/AuthenticationService";

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        AuthenticationService.isLogged() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};
