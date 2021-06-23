import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { RegisterPage } from "./pages/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
const theme = createMuiTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <DashboardPage />
          </PrivateRoute>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
